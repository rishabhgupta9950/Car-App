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
  customer: ICustomer;
  customers: ICustomer[]=[];
  update: ICustomer=new ICustomer();
  click(name: number){
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

  updateCustomer(form: FormGroup){
    this.update.userId=form.get('userId').value;
    this.update.password=form.get('password').value;
    this.update.name=form.get('role').value;
    this.update.email=form.get('role').value;
    this.update.contactNo=form.get('role').value;
    this.update.dob=form.get('role').value;
  
    this.update.address=new IAddress();
    this.update.address.doorNo=form.get('doorNo').value;
    this.update.address.street=form.get('street').value;
    this.update.address.area=form.get('area').value;
    this.update.address.city=form.get('city').value;
    this.update.address.state=form.get('state').value;
    this.update.address.pincode=form.get('pincode').value;
    this.sub=this.customerService.updateCustomer(this.update).subscribe(data =>{
      console.log("Data Updated")
    },
    error=>{
      console.log(error);
    }
    );
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

  allCustomer(form: FormGroup){
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