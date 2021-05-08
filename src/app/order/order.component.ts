import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  openForm: number = null;

  constructor() { }

  click(name: number){
    this.openForm = name;
  }

  ngOnInit(): void {
  }

}
