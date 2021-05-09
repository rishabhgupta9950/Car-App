import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.dashboard.component.html',
    styleUrls: ['./admin.dashboard.component.css']
  })
  export class AdminDashboardComponent implements OnInit{

    userId=JSON.parse(localStorage.getItem("adminId"));
    ngOnInit(): void {
    }

  }
