import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICard } from '../models/card';
import { IPayment } from '../models/payment';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup;
  payment: IPayment=new IPayment();
  orderId: number;

  constructor(private formBuilder: FormBuilder, private paymentService: PaymentService, private router: Router) {
    this.paymentForm=this.formBuilder.group({
      name: ['', Validators.required],
      number: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      // expiry: '',
      month: ['', Validators.required],
      year: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    });
  }

  onSubmit(form: FormGroup) {
    console.log('In onSubmit()');
    // this.payment.card=form.value;
    this.payment.card=new ICard();
    this.payment.card.name=form.get('name').value;
    this.payment.card.number=form.get('number').value;
    this.payment.card.cvv=form.get('cvv').value;
    this.payment.card.expiry=`${form.get('year').value}-${form.get('month').value}-01`
    this.payment.id=101;
    this.payment.status="Successful";
    this.payment.type="Debit Card";
    console.log(this.payment);
    this.paymentService.addPAyment(this.payment).subscribe({
      next: data =>{
        console.log('Payment Successful', data);
        this.router.navigate(['/bill-details'], {state: {id: this.orderId}})
      }
    });
    this.paymentForm.reset();
  }

  ngOnInit(): void {
  }

}
