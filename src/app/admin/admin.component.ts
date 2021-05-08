import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAdmin } from '../models/admin';
import { ICard } from '../models/card';
import { ICustomer } from '../models/customer';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminForm: FormGroup;
  submitted: boolean = false;
  customer: ICustomer=new ICustomer();

  authRequest: any;

  response: any;
  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private router: Router) {


  }

  ngOnInit() {

    // if(localStorage.token != null && localStorage.role!=null){
    //     if(localStorage.role == 'ROLE_CUSTOMER'){
    //      this.router.navigate(["/customer"]);
    //     }
    //     else if(localStorage.role == 'ROLE_MERCHANT'){
    //        this.router.navigate(["/merchant"]);
 
    //     }
    // }
    this.adminForm = this.formBuilder.group({

      userId: ['', [Validators.required]],
      password: ['', Validators.required]
    })
    

  }


  login(form:FormGroup) {
    
    let userId = this.adminForm.controls.userId.value;
    let password = this.adminForm.controls.password.value;
    // this.authRequest = {
    //   "userId": userId,
    //   "password": password
    // };

    this.adminService.SignIn(userId,password).subscribe({
      next:customer => {
        this.customer=customer;
        console.log(this.customer);
      }
        });

      

    console.log(`Sign in successful with ${userId} and ${password}.`);
    alert(`Sign in successful with ${userId} and ${password}.`);

    // let resp = this.service.generateToken(this.authRequest);
    // resp.subscribe(data => {
    //   if (data == "Invalid") {
    //     alert("Invalid username/password");
    //   } else {
    //     localStorage.token = data
    //     var decoded = jwt_decode(data);
    //     var role = decoded['jti'];
    //     localStorage.role=role;
    //     if (role == 'ROLE_CUSTOMER') {
    //       this.router.navigate(["/customer"]);
    //     }
    //     else if(role == 'ROLE_MERCHANT'){
    //       this.router.navigate(["/merchant"]);
    //     }

    //   }
    // }
   


  }

}

 
