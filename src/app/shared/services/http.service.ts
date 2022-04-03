import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/reservations/models/reservation.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public addReservation(reservation: Reservation) {
    const url = `${environment.httpServerUrl}/api/reservations`;

    const httpOptions = {
      resposeType: "json",
      withCredentials: true,
    };

    return this.httpClient.post(url, reservation, httpOptions);
  }

  public getReservations(email: string): Observable<Reservation[]> {
    const url = `${environment.httpServerUrl}/api/reservations?email=${email}`;

    const httpOptions = {
      resposeType: "json",
      withCredentials: true,
    };

    return this.httpClient.get<Reservation[]>(url, httpOptions);
  }

}
