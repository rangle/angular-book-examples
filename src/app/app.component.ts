import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  pageViews = 100;
  seconds = interval(1000);

  fetchPrice = new Promise((resolve, reject) => {
    // simulate polling every 2 seconds
    setTimeout(() => resolve(1000), 2000);
  });

  constructor() {
    // simulate polling every 5 seconds
    setInterval(() => {
      this.pageViews += Math.round(Math.random() * 10);
    }, 3000);
  }
}
