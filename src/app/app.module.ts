import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { routing } from './app.routes';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';

@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [AppComponent, HelloComponent, ComponentOne, ComponentTwo],
  bootstrap: [AppComponent],
})
export class AppModule {}
