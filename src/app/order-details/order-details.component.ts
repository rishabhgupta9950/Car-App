import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IOrder } from '../models/order';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnDestroy {

  constructor(private paymentService: PaymentService) { }
  
  order: IOrder;
  total: number=0;
  sgst: number=0;
  cgst: number=0;
  amount: number=0;
  sub!: Subscription;
  calculateSum():void{
    for(let i=0;i<this.order.car.length;i++){
      this.total+=this.order.car[i].price;
    }
  }
  
  ngOnInit(): void {
    this.sub=this.paymentService.getOrderDetails(247).subscribe({
      next: order => {
        this.order=order;
        for(let i=0;i<this.order.car.length;i++){
          this.total+=this.order.car[i].price;
        }
        this.sgst=this.total*0.09;
        this.cgst=this.total*0.09;
        this.amount=this.total+this.sgst+this.cgst;
      }
    });
    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
