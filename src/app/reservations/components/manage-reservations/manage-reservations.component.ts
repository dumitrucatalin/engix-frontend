import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import Swal from 'sweetalert2';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-manage-reservations',
  templateUrl: './manage-reservations.component.html',
  styleUrls: ['./manage-reservations.component.scss']
})
export class ManageReservationsComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'reservationDate', 'seats', 'email', 'optional'];
  public reservations: Reservation[] = [];

  private email: string = '';


  constructor(
    private httpService: HttpService
  ) {
    this.email = localStorage.getItem('email') || '';
  }

  ngOnInit(): void {
    this.getReservations(this.email);
  }

  private getReservations(email: string) {
    this.httpService.getReservations(email).subscribe(reservations => {
      this.reservations = reservations;
    }, error => {
      console.error(error);
      Swal.fire(
        'Error',
        error.error.messge || 'Server Error',
        'error'
      )
    })
  }
}
