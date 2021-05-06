
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {CarRegisterService} from '../services/car-register.service'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  register: FormGroup;
 


  constructor(private service:CarRegisterService, private formBuilder:FormBuilder ) { 
    // ,
    //   this.register = this.formBuilder.group({
    //    id:[''],
    //   brand: ['', Validators.required, Validators.min(3)],
    //   model: ['', [Validators.required, Validators.min(3)]],
    //   color: ['', [Validators.required, Validators.min(3)]],
    //   variant: ['', [Validators.required, Validators.min(3)]],
    //   price: ['', [Validators.required, Validators.min(4)]],
    //   registrationYear: ['', [Validators.required, Validators.min(3)]],
    //   registrationState: ['', [Validators.required, Validators.min(3)]]
    // });
    
  }

 

  ngOnInit(): void {
     this.register = this.formBuilder.group({
      id: [''],
      brand: ['', Validators.required, Validators.min(3)],
      model: ['', [Validators.required, Validators.min(3)]],
      color: ['', [Validators.required, Validators.min(3)]],
      variant: ['', [Validators.required, Validators.min(3)]],
      price: ['', [Validators.required, Validators.min(4)]],
      registrationYear: ['', [Validators.required, Validators.min(3)]],
      registrationState: ['', [Validators.required, Validators.min(3)]]
    });
  }
  
   addCar(){
    let resp=this.service.doRegistration(this.register.value);
    resp.subscribe((data)=>console.log("Form submitted."));
    }

}
