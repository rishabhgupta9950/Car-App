import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  openForm: number = null;

  constructor(private formBuilder: FormBuilder) { 
    this.orderForm = this.formBuilder.group({
        orderId: ['', Validators.required, Validators.min(0)],
        billingDate: ['', Validators.required],
        custId: ['', Validators.required, Validators.min(0)],
        carId: ['', Validators.required, Validators.min(0)]
    });
  }

  onSubmit(form: FormGroup) {
    alert('Order placed Successfully');
    console.log(form.value.name);
    this.orderForm.reset();
  }

  click(name: number){
    this.openForm = name;
  }

  ngOnInit(): void {
  }

}
