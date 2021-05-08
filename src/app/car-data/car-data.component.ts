import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ICar } from '../models/car';
import { CarRegisterService } from '../services/car-register.service';

@Component({
  selector: 'app-car-data',
  templateUrl: './car-data.component.html',
  styleUrls: ['./car-data.component.css']
})
export class CarDataComponent implements OnInit {

  constructor(private carServive: CarRegisterService) { }

  cars: ICar[] = [];
  // selectedCars: ICar[] = [];
  // totalCartItems:number;
  num:any;
  length:number=0;
  filters = {
    keyword:''
  }

  //   {
  //     "id": 190,
  //     "brand": "Mercedes",
  //     "model": "Benz",
  //     "color": "Black",
   //       
  //     "variant": "Recent",
  //     "price": 1200000,
  //     "registrationYear": "2021-03-12",
  //     "registrationState": "WB"
  //   },
  //    {
  //     "id": 191,
  //     "brand": "Honda",
  //     "model": "City",
  //     "color": "Black",
  //     "variant": "New",
  //     "price": 600000,
  //     "registrationYear": "2020-09-16",
  //     "registrationState": "WB"
  //   },
  //   {
  //     "id": 192,
  //     "brand": "Honda",
  //     "model": "Civic",
  //     "color": "Brown",
  //     "variant": "New",
  //     "price": 400000,
  //     "registrationYear": "2019-04-10",
  //     "registrationState": "MH"
  //   },
  //   {
  //     "id": 225,
  //     "brand": "Honda",
  //     "model": "City",
  //     "color": "Black",
  //     "variant": "Vxi",
  //     "price": 25.5,
  //     "registrationYear": "2021-12-12",
  //     "registrationState": "Maharashtra"
  //   },
  //   {
  //     "id": 250,
  //     "brand": "Tata",
  //     "model": "Safari",
  //     "color": "Black",
  //     "variant": "Vxi",
  //     "price": 15.5,
  //     "registrationYear": "2020-12-12",
  //     "registrationState": "Maharashtra"
  //   }
  // ]

  ngOnInit(): void {
    this.carServive.getAllCars().subscribe(data=>this.cars=data);
    // console.log(JSON.parse(localStorage.getItem('len')));
    // this.num=JSON.parse(localStorage.getItem('len'));
  //  this.totalCartItems=this.totalCartItems+num;
    // console.log("this is: "+this.totalCartItems);
    console.log(typeof(this.num));
  }

  carList(){
    this.carServive.getAllCars().subscribe(
      data=>{
        this.cars = this.filterCars(data);
        
      });
    
  }

  filterCars(cars: ICar[]){
    return cars.filter((c) => {
      return c.brand.toLocaleLowerCase().includes(this.filters.keyword.toLocaleLowerCase())
            || c.model.toLocaleLowerCase().includes(this.filters.keyword.toLocaleLowerCase())
            || c.color.toLocaleLowerCase().includes(this.filters.keyword.toLocaleLowerCase()) ;
    })
  }

addToCart(car: ICar){
  console.log(JSON.parse(localStorage.getItem('len')));
  // this.carServive.cartDetails(car).sub
  console.log("Inside add to cart: "+this.num);
  this.length = this.carServive.cartDetails(car);
  console.log(JSON.parse(localStorage.getItem('len')));
  // console.log(this.length);
  // this.length+=this.num;
}


}
