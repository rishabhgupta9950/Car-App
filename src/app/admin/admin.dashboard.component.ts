import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.dashboard.component.html',
  styleUrls: ['./admin.dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  constructor(private router: Router) { }


  userId = JSON.parse(localStorage.getItem("adminId"));
  ngOnInit(): void {
    const adminId = JSON.parse(localStorage.getItem('adminId'))
    if (!adminId) {
      Swal.fire({
        icon: 'error',
        title: 'Access Denied',
        text: 'Please Login as Admin to view this page'
      });
      this.router.navigate(['/admin']);
    }
    else{
      if (!localStorage.getItem('foo')) { 
        localStorage.setItem('foo', 'no reload') 
        location.reload() 
      } else {
        localStorage.removeItem('foo') 
      }
    }
    
  }

}
