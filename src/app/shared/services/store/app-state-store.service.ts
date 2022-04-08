import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateStoreService {

  private readonly _loadingSource = new BehaviorSubject<boolean>(false);
  private readonly loading$ = this._loadingSource.asObservable();

  constructor() { }

  public get loading(): Observable<boolean> {
    return this.loading$;
  }

  public setLoading(loadingState: boolean): void {
    this._loadingSource.next(loadingState);
  }
}
