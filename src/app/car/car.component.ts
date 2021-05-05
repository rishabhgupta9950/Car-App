import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Car} from '../cars'



@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  userForm: FormGroup;
  cars: Car = new Car("","","","",0,new Date,"");


  constructor(private formBuilder:FormBuilder) { 
    this.userForm = this.formBuilder.group({
      brand: ['', Validators.required, Validators.min(3)],
      model: ['', [Validators.required, Validators.min(3)]],
      color: ['', [Validators.required, Validators.min(3)]],
      variant: ['', [Validators.required, Validators.min(3)]],
      price: ['', [Validators.required, Validators.min(4)]],
      year: ['', [Validators.required, Validators.min(3)]],
      state: ['', [Validators.required, Validators.min(3)]]
    });
  }

  ngOnInit(): void {
  }


}
