import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarTilesComponent} from '../car-tiles/car-tiles.component';
import {CustomerListComponent} from '../customer-list/customer-list.component';
import {AdminComponent} from '../admin/admin.component';
import {AdminCarListComponent} from '../admin/admin-car-list/admin-car-list.component';
import {AdminCustomerListComponent} from '../admin/admin-customer-list/admin-customer-list.component';
import {CarDetailsComponent} from '../car-tiles/car-details/car-details.component';
import {CarEditComponent} from '../car-tiles/car-edit/car-edit.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routing: Routes = [
  {path: '', redirectTo: '/cars', pathMatch: 'full'},
  {path: 'cars', component: CarTilesComponent},
  {path: 'cars/:id', component: CarDetailsComponent},
  {path: 'cars/:id/edit', component: CarEditComponent},
  {path: 'customers', component: CustomerListComponent},
  {path: 'admin', component: AdminComponent,
    children: [
      {path: '', redirectTo: 'cars', pathMatch: 'full'},
      {path: 'cars', component: AdminCarListComponent},
      {path: 'customers', component: AdminCustomerListComponent},
    ]
  },
  {path: "**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routing)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}