import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomerComponent } from '../customer/customer.component';
import { IAddress } from '../models/address';
import { ICustomer } from '../models/customer';
import { CustomerService } from '../services/customer.service';

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

  customer: ICustomer = new ICustomer();
  update: ICustomer = new ICustomer();
  

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService, private router: Router) {
    

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

  addCustomer(form: FormGroup) {


    console.log('In addCustomer()');

    this.customer.userId = 101;
    this.customer.password = form.get('password').value;
    this.customer.role = 'Customer';
    this.customer.name = form.get('name').value;
    this.customer.email = form.get('email').value;
    this.customer.contactNo = form.get('contactNo').value;
    this.customer.dob = form.get('dob').value;
    this.customer.address = new IAddress();
    this.customer.address.doorNo = form.get('doorNo').value;
    this.customer.address.street = form.get('street').value;
    this.customer.address.area = form.get('area').value;
    this.customer.address.city = form.get('city').value;
    this.customer.address.state = form.get('state').value;
    this.customer.address.pincode = form.get('pincode').value;

    this.customerService.addCustomer(this.customer).subscribe(data => {
      console.log("Data Inserted")
    },

    );

    this.addForm.reset();

  }

  
  ngOnInit() {

    this.addForm = this.formBuilder.group({

      pincode: ['', [Validators.required, Validators.pattern("^[1-9][0-9]{5}$")]],

      dob: '',
      doorNo: '',
      street: '',
      area: '',
      city: '',
      state: '',
      name: ['', [Validators.required, this.customPatternValid({
        pattern: /^([^0-9]*)$/, msg: 'Numbers not Allowed..'
      }),
      Validators.pattern("^[0-9A-Z][0-9a-zA-Z]*(?: [0-9A-Z][0-9a-zA-Z]*){0,2}$")]],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("[a-zA-Z6-9][A-Za-z0-9]*"), this.customPatternValid({
        pattern: /^([^a-b A-z]*)$/, msg: 'only numbers are expected'
      })]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")]],
    });



  }

}


