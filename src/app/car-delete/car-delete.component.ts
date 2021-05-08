import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICar } from '../models/car';
import { CarRegisterService } from '../services/car-register.service';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css']
})
export class CarDeleteComponent implements OnInit {

  carDeleteForm: FormGroup;
  car: ICar = new ICar();
  constructor(private carService:CarRegisterService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.carDeleteForm = this.formBuilder.group({
      id: ['']
    });
  }

  deleteCar(id:number){
    console.log("452");
    // this.carService.deleteCarRecord(id).subscribe(date=>console.log("delete"));
  }
}
