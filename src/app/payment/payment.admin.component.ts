import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IPayment } from '../models/payment';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-order',
  templateUrl: './payment.admin.component.html',
  styleUrls: ['./payment.admin.component.css']
})
export class PaymentAdminComponent implements OnInit {

  openForm: number = null;
  getByIdForm: FormGroup;
  getAllForm: FormGroup;

  constructor(private paymentService: PaymentService, private formBuilder: FormBuilder) {
    this.getByIdForm=this.formBuilder.group({
      paymentId: ['', Validators.required]
    });

    this.getAllForm=this.formBuilder.group({

    });
  }
  sub!: Subscription;
  payment: IPayment;
  payments: IPayment[]=[];
  click(name: number){
    this.openForm = name;
  }

  paymentById(form: FormGroup){
    this.sub=this.paymentService.getPaymentById(form.value.paymentId).subscribe({
      next: payment =>{
        this.payment=payment;
      }
    });
    this.getByIdForm.reset();
    this.openForm=2;
  }

  allPayment(form: FormGroup){
    this.sub=this.paymentService.getAllPayment().subscribe({
      next: payments =>{
        this.payments=payments;
      }
    });
    this.getAllForm.reset();
    this.openForm=1;
  }

  ngOnInit(): void {
  }

}
