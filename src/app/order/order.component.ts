import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IOrder } from '../models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  addForm: FormGroup;
  modifyForm: FormGroup;
  allOrderForm: FormGroup;
  byIdForm: FormGroup;
  cancelForm: FormGroup;
  billForm: FormGroup;
  byDateForm: FormGroup;
  openForm: number = null;
  order: IOrder;
  orders: IOrder[] = [];

  constructor(private orderService: OrderService, private formBuilder: FormBuilder, private router: Router) {

    this.allOrderForm = this.formBuilder.group({});

    this.byIdForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.maxLength(5), Validators.min(1), Validators.max(99999)]],
    });

    this.billForm = this.formBuilder.group({
      id: ['', [Validators.required, Validators.maxLength(5), Validators.min(1), Validators.max(99999)]],
    });

    this.byDateForm = this.formBuilder.group({
      billingDate: ['', [Validators.required]],
    });
  }

  // Method for Switch Case
  click(name: number) {

    if (name === 2 || name === 4) {
      this.getAllOrders();
    }

    this.openForm = name;
  }

  ngOnInit(): void {
  }

  // Method for retrieving All Orders
  getAllOrders() {
    let allOrders = this.orderService.getAllOrders().subscribe({
      next: orders => {
        this.orders = orders;
      }
    });
    this.allOrderForm.reset();
    this.openForm = 1;
  }

  // Method for retrieving Order by ID
  getOrderDetails(form: FormGroup) {

    let orderById = this.orderService.getOrderDetails(form.value.id).subscribe({
      next: order => {

        this.order = order;
        for (let i = 0; i < order.car.length; i++) {
          console.log("Cars" + this.order.car[i].id);
        }
      }
    });
    this.byIdForm.reset();
    this.openForm = 2;
  }

  // Method for retrieving Orders by Billing Date
  getByBillDate(form: FormGroup) {
    let byBillDate = this.orderService.getOrdersByBillingDate(form.value.billingDate).subscribe({
      next: orders => {
        this.orders = orders;
        for (let i = 0; i < orders.length; i++) {
          console.log(this.orders[i].car);
        }
      }
    });
    this.byDateForm.reset();
    this.openForm = 3;
  }

  //Method for navigating to Billing Page
  getBill(form: FormGroup) {
    console.log("in get bill");
    console.log(form.get('id').value);
    this.router.navigateByUrl('/bill-details', { state: { id: form.get('id').value } });
  }
}
