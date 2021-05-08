import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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

import { CarDataComponent } from './car-data/car-data.component';

import { OrderDetailsComponent } from './order-details/order-details.component';
import { from } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { PaymentAdminComponent } from './payment/payment.admin.component';
import { AdminDashboardComponent } from './admin/admin.dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { CarDeleteComponent } from './car-delete/car-delete.component';
import { CarUpdateComponent } from './car-update/car-update.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AdminComponent,
    AdminDashboardComponent,
    CarComponent,
    AppointmentComponent,
    PaymentComponent,
    PaymentAdminComponent,
    OrderComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarDataComponent,
    OrderDetailsComponent,

    CarDeleteComponent,
    CarUpdateComponent,

    RegisterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home', component: HomeComponent},
      {path:'appointment', component: AppointmentComponent},

      // {path:'carRegister', component: CarComponent},
      // {path:'deleteCar', component: CarDeleteComponent},
      {path:'products', component: CarDataComponent},
      {path:'carUpdate', component: CarUpdateComponent},

      {path:'carRegister', component: CarComponent},
      {path:'products', component: CarDataComponent},

      {path:'login', component: LoginComponent},
      {path:'order', component: OrderComponent},
      {path:'order-details', component: OrderDetailsComponent},
      {path:'register', component: RegisterComponent},
      {path:'payment', component: PaymentComponent},
      {path:'payment-admin', component: PaymentAdminComponent},
      {path:'admin', component: AdminComponent},
      {path:'admin-dashboard', component: AdminDashboardComponent},
      {path:'customer', component: CustomerComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
