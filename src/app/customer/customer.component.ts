import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICustomer } from '../models/customer';
import { IAddress } from '../models/address';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  openForm: number = null;
  getByIdForm: FormGroup;
  getAllForm: FormGroup;
  removeForm: FormGroup;
  updateForm: FormGroup;

  constructor(private customerService: CustomerService, private formBuilder: FormBuilder) {
    this.getByIdForm=this.formBuilder.group({
      userId: ['', Validators.required]
    });

    this.getAllForm=this.formBuilder.group({

    });

    this.removeForm=this.formBuilder.group({
      userId: ['', Validators.required]
    });

    this.updateForm=this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      contactNo: ['', Validators.required],
      dob: ['', Validators.required],
      doorNo: ['', Validators.required],
      street: ['', Validators.required],
      area: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required]
    })
  }
  sub!: Subscription;
  customer: ICustomer=new ICustomer();
  customers: ICustomer[]=[];
  update: ICustomer=new ICustomer();
  click(name: number){

    if (name === 2 || name === 4) {
      this.allCustomer();
    }
    this.openForm = name;
  }

  customerById(form: FormGroup){
    this.sub=this.customerService.getCustomer(form.value.userId).subscribe({
      next: customer =>{
        this.customer=customer;
      }
    });
    this.getByIdForm.reset();
    this.openForm=2;
  }

  updateCustomer(form: FormGroup) {


    console.log('In updateCustomer()');

    this.customer.userId = form.get('userId').value;
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

    this.customerService.updateCustomer(this.customer).subscribe(data =>{
      console.log("Data Updated")
    },
    );

    this.updateForm.reset();

  }


  delById(form: FormGroup){
    this.sub=this.customerService.removeCustomer(form.value.userId).subscribe({
      next: customer =>{
        this.customer= customer;
      }
    });
    this.removeForm.reset();
    this.openForm=4;
  }

  allCustomer(){
    this.sub=this.customerService.getAllCustomers().subscribe({
      next: customers =>{
        this.customers=customers;
      }
    });
    this.getAllForm.reset();
    this.openForm=1;
  }

  ngOnInit(): void {
  }

}