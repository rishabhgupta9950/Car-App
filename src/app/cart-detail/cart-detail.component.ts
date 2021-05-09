import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  check: any = JSON.parse(localStorage.getItem('len'));
  user: any;
  key: any;
  


  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.key = localStorage.key(0);
  }


  ShowCartDetails() {

  }
}
