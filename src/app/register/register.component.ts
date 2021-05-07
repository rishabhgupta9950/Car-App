import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { ICustomer } from '../models/customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addForm: FormGroup;
  submitted: boolean = false;
  email: string
  emailErrorMessage: string;
  emailFlag: boolean = false;
  contactNo: string;
  contactNoErrorMessage: string;
  contactNoFlag: boolean = false;

  customer: ICustomer;

  constructor(private formBuilder:FormBuilder,private router :Router) {

  }



  ngOnInit() {

    this.addForm = this.formBuilder.group({

      userId:'',
      pincode: ['',[Validators.required, Validators.pattern("^[1-9][0-9]{5}$")]],
    
      dob:'',
      doorNo:'',
      street:'',
      area:'',
      city:'',
      state:'',
      name: ['', [Validators.required,this.customPatternValid({
        pattern: /^([^0-9]*)$/, msg: 'Numbers not Allowed..'}),
         Validators.pattern("^[0-9A-Z][0-9a-zA-Z]*(?: [0-9A-Z][0-9a-zA-Z]*){0,2}$")]],
      email: ['', [Validators.required,Validators.email]],
      contactNo: ['', [Validators.required,  Validators.maxLength(10), Validators.minLength(10), Validators.pattern("[a-zA-Z6-9][A-Za-z0-9]*"), this.customPatternValid({
        pattern: /^([^a-b A-z]*)$/, msg: 'only numbers are expected'})]],
     role:['',Validators.required],
      password: ['', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
    },)
  }

  public customPatternValid(config: any): ValidatorFn {
    return (control: FormControl) => {
      let regExp: RegExp = config.pattern;
      if (control.value && !control.value.match(regExp)) {
        return {
          invalidMsg: config.msg
        };
      }
      else {
        return null;
      }
    };
  }
  
  addCustomer()
  {
    this.submitted=true;
    if(this.addForm.invalid)
    return;
    console.log(this.addForm.value)

  }
}
