import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  fileSizes = [10, 100, 1000, 10000, 100000, 10000000, 10000000000];
  largeFileSize = Math.pow(10, 15)
}
