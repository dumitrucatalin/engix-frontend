import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { ReservationsComponent } from './reservations.component';
import { SharedModule } from '../shared/shared.module';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';
import { ManageReservationsComponent } from './components/manage-reservations/manage-reservations.component';


@NgModule({
  declarations: [
    ReservationsComponent,
    AddReservationComponent,
    ManageReservationsComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    SharedModule
  ]
})
export class ReservationsModule { }
