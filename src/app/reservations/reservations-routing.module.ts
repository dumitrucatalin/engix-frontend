import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';
import { ManageReservationsComponent } from './components/manage-reservations/manage-reservations.component';
import { ReservationsComponent } from './reservations.component';

const routes: Routes = [{
  path: '', component: ReservationsComponent, children: [
    {
      path: "add",
      component: AddReservationComponent,
    },
    {
      path: "manage",
      component: ManageReservationsComponent,
    },
  ]
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
