import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import {CarComponent} from './car/car.component'
import { AppointmentComponent } from './appointment/appointment.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarDataComponent } from './car-data/car-data.component';

import { OrderDetailsComponent } from './order-details/order-details.component';

import { HttpClientModule } from '@angular/common/http';
import { CarDeleteComponent } from './car-delete/car-delete.component';
import { CarUpdateComponent } from './car-update/car-update.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AdminComponent,
    CarComponent,
    AppointmentComponent,
    PaymentComponent,
    OrderComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarDataComponent,
    OrderDetailsComponent,
    CarDeleteComponent,
    CarUpdateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home', component: HomeComponent},
      {path:'appointment', component: AppointmentComponent},
      // {path:'carRegister', component: CarComponent},
      // {path:'deleteCar', component: CarDeleteComponent},
      {path:'products', component: CarDataComponent},
      {path:'carUpdate', component: CarUpdateComponent},
      {path:'login', component: LoginComponent},
      {path:'order', component: OrderComponent},
      {path:'order-details', component: OrderDetailsComponent},
      {path:'register', component: LoginComponent},
      {path:'payment', component: PaymentComponent},

      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
