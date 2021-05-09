import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICar } from '../models/car';
import { IOrder } from '../models/order';
import { CarRegisterService } from '../services/car-register.service';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {

  constructor(private carService: CarRegisterService, private paymentService: PaymentService) { }

  order: IOrder = new IOrder();
  total: number = 0;
  sgst: number = 0;
  cgst: number = 0;
  amount: number = 0;
  sub!: Subscription;

  carArray: ICar[] = [];
  c: number[] = [];

  calculateSum(): void {
    for (let i = 0; i < this.order.car.length; i++) {
      this.total += this.order.car[i].price;
    }
  }

  ngOnInit(): void {
    this.c = JSON.parse(localStorage.getItem('user'));//
    this.order.car = [];
    for (let j = 0; j < this.c.length; j++) {
      // console.log(this.c[j]);
      this.sub=this.carService.getCar(this.c[j]).subscribe({
        next: data => {
          this.order.car[j] = data;
          console.log("Data:" + this.order.car[j]);
          this.total += this.order.car[j].price;

          this.sgst = this.total * 0.09;
          this.cgst = this.total * 0.09;
          this.amount = this.total + this.sgst + this.cgst;
        }
      });

    }

    console.log(this.carArray);

    // this.order.car = this.carArray;
    // for(let i=0;i<this.order.car.length;i++){
    //   this.total+=this.order.car[i].price;
    // }
    // this.sgst=this.total*0.09;
    // this.cgst=this.total*0.09;
    // this.amount=this.total+this.sgst+this.cgst;
    // for(let i=0;i<this.order.car.length;i++){
    //   this.total+=this.order.car[i].price;
    // }
    // this.sgst=this.total*0.09;
    // this.cgst=this.total*0.09;
    // this.amount=this.total+this.sgst+this.cgst;


    // this.sub=this.paymentService.getOrderDetails(247).subscribe({
    //   next: order => {
    //     this.order=order;
    //     for(let i=0;i<this.order.car.length;i++){
    //       this.total+=this.order.car[i].price;
    //     }
    //     this.sgst=this.total*0.09;
    //     this.cgst=this.total*0.09;
    //     this.amount=this.total+this.sgst+this.cgst;
    //   }
    // });

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
