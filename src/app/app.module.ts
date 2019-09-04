import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';
import ChildOne from './child-one';
import ChildTwo from './child-two';

@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [AppComponent, HelloComponent, ComponentOne, ComponentTwo, ChildOne, ChildTwo],
  bootstrap: [AppComponent],
})
export class AppModule {}
