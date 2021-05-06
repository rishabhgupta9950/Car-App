import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.paymentForm=this.formBuilder.group({
      name: ['', Validators.required],
      cardNo: ['', Validators.required, Validators.max(16), Validators.min(16)],
      cvv: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    alert(`User ${form.value.name} registered successfully.`);
    console.log(form.value.name);
    this.paymentForm.reset();
  }

  ngOnInit(): void {
  }

}
