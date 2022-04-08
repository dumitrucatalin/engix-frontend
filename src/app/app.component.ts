import { Component, OnInit } from '@angular/core';
import { AppStateStoreService } from './shared/services/store/app-state-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'engix-frontend';

  public isLoading = true;

  constructor(private appStateStore: AppStateStoreService) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.appStateStore.loading.subscribe(loading => this.isLoading = loading);
    });
  }
}
