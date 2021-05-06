import { Component, OnInit } from '@angular/core';
import { ICar } from '../models/car';

@Component({
  selector: 'app-car-data',
  templateUrl: './car-data.component.html',
  styleUrls: ['./car-data.component.css']
})
export class CarDataComponent implements OnInit {

  constructor() { }

  cars: ICar[] = [
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
      "id": 192,
      "brand": "Honda",
      "model": "Civic",
      "color": "Brown",
      "variant": "New",
      "price": 400000,
      "registrationYear": "2019-04-10",
      "registrationState": "MH"
    },
    {
      "id": 225,
      "brand": "Honda",
      "model": "City",
      "color": "Black",
      "variant": "Vxi",
      "price": 25.5,
      "registrationYear": "2021-12-12",
      "registrationState": "Maharashtra"
    },
    {
      "id": 250,
      "brand": "Tata",
      "model": "Safari",
      "color": "Black",
      "variant": "Vxi",
      "price": 15.5,
      "registrationYear": "2020-12-12",
      "registrationState": "Maharashtra"
    }
  ]

  ngOnInit(): void {
  }

}
