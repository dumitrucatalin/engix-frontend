import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  public goToAddReservations(){
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  public goToManageReservations(){
    this.router.navigate(['manage'], { relativeTo: this.route });
  }


}
