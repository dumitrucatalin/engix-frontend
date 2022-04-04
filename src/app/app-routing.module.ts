import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'reservations', loadChildren: () => import('./reservations/reservations.module').then(m => m.ReservationsModule) },
{ path: '**', pathMatch: 'full', redirectTo: '/reservations/add' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
