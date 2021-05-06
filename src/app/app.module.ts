import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { CarComponent } from './car/car.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'home', component: HomeComponent},
      {path:'appointment', component: AppointmentComponent},
      {path:'products', component: CarComponent},
      {path:'login', component: LoginComponent},
      {path:'register', component: LoginComponent},
      {path:'order', component: OrderComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
