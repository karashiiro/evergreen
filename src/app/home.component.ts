import { Component } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'Demo';
  greeting: { id?: string; content?: string } = {};

  constructor(private app: AppService, http: HttpClient) {
    http.get('resource').subscribe((data) => (this.greeting = data));
  }

  authenticated() {
    return this.app.authenticated;
  }
}
