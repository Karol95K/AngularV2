import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarTilesComponent } from './car-tiles/car-tiles.component';
import { CarTileComponent } from './car-tiles/car-tile/car-tile.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Car } from './car-tiles/car';
import { AdminComponent } from './admin/admin.component';
import { AdminCarListComponent } from './admin/admin-car-list/admin-car-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AdminCustomerListComponent } from './admin/admin-customer-list/admin-customer-list.component';
import { CarEditComponent } from './car-tiles/car-edit/car-edit.component';
import { CarDetailsComponent } from './car-tiles/car-details/car-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarTilesComponent,
    CarTileComponent,
    MainContentComponent,
    FooterComponent,
    HeaderComponent,
    AdminComponent,
    AdminCarListComponent,
    AdminCustomerListComponent,
    CarEditComponent,
    CarDetailsComponent,
    CustomerListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
