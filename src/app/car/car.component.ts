
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICar } from '../models/car';
import {CarRegisterService} from '../services/car-register.service'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  register: FormGroup;
 
  car: ICar;

  constructor(private service:CarRegisterService, private router:Router, private formBuilder:FormBuilder ) { 
 
   
    
  }

 

  ngOnInit(): void {
   
  }
  
  

}
