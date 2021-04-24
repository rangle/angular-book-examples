import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import ProductListComponent from './product-list.component';
import ProductDetailsComponent from './product-details.component';
import ProductDetailsOverviewComponent from './product-details-overview.component';
import ProductSpecsComponent from './product-specs.component';

@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [AppComponent, ProductListComponent, ProductDetailsComponent, ProductDetailsOverviewComponent, ProductSpecsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
