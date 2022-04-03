import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent implements OnInit {

  public minDate = new Date();

  addReservationsForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    reservationDate: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    seats: new FormControl('1', [Validators.required, Validators.max(8), Validators.min(1)]),
    optional: new FormControl('', []),
  });

  public emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  constructor(
    private httpService: HttpService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  private redirectToManageReservation() {
    this.router.navigate(['reservations', 'manage']);
  }

  public addReservation() {
    const reservations: Reservation = this.addReservationsForm.value;
    this.httpService.addReservation(reservations).subscribe(result => {
      localStorage.setItem('email', reservations.email);
      this.redirectToManageReservation();
      Swal.fire(
        'Success',
        result.toString(),
        'success'
      )
    }, error => {
      Swal.fire(
        'Error',
        error.error.messge || 'Server Error',
        'error'
      )
    })


  }
}
