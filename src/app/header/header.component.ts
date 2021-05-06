import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  carOpen:boolean= false;
  constructor() { }

  ngOnInit(): void {
    this.carOpen= false;
  }

  isCarOpen(){
    this.carOpen= true;
  }



}
