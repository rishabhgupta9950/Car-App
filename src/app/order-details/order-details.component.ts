import { Component, OnInit } from '@angular/core';
import { IOrder } from '../models/order';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order: IOrder=
    {
      "id": 247,
      "billingDate": "2021-04-16",
      "status": "Completed",
      "customer": {
        "userId": 233,
        "password": "123456",
        "role": "Customer",
        "name": "Sam",
        "email": "abcd.def@yahoo.com",
        "contactNo": "7854125789",
        "dob": "2020-11-15",
        "address": {
          "doorNo": 789,
          "street": "High",
          "area": "Indira Nagar",
          "city": "Nashik",
          "state": "Maharashtra",
          "pincode": 411587
        }
      },
      "car": [
        {
          "id": 191,
          "brand": "Honda",
          "model": "City",
          "color": "Black",
          "variant": "New",
          "price": 600000,
          "registrationYear": "2020-09-16",
          "registrationState": "WB"
        },
        {
          "id": 190,
          "brand": "Mercedes",
          "model": "Benz",
          "color": "Black",
          "variant": "Recent",
          "price": 1200000,
          "registrationYear": "2021-03-12",
          "registrationState": "WB"
        },
        {
          "id": 192,
          "brand": "Honda",
          "model": "Civic",
          "color": "Brown",
          "variant": "New",
          "price": 400000,
          "registrationYear": "2019-04-10",
          "registrationState": "MH"
        }
      ]
    };
  total: number=0;
  sgst: number=0;
  cgst: number=0;
  amount: number=0;
  calculateSum():void{
    for(let i=0;i<this.order.car.length;i++){
      this.total+=this.order.car[i].price;
    }
  }
  constructor() { }

  ngOnInit(): void {
    for(let i=0;i<this.order.car.length;i++){
      this.total+=this.order.car[i].price;
    }
    this.sgst=this.total*0.09;
    this.cgst=this.total*0.09;
    this.amount=this.total+this.sgst+this.cgst;
  }

}
