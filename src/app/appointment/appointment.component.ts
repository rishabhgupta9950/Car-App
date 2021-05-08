import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IAppointment } from '../models/appointment';
import { IPayment } from '../models/payment';
import { AppointmentService } from '../services/appointment.service';
import { PaymentService } from '../services/payment.service';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  userForm: FormGroup;
  appointment: IAppointment = new IAppointment();
  appointmentForm: FormGroup;
  cancelForm: FormGroup;
  openForm: number = null;




  constructor(private appointmentService: AppointmentService,private paymentService: PaymentService,private formBuilder: FormBuilder) {

    this.userForm = this.formBuilder.group({
      id: ['', Validators.required],
      custId: ['', Validators.required],
      location: ['', Validators.required],
      inspectionType: ['', Validators.required],
      preferredDate: ['', Validators.required],
      preferredTime: ['', Validators.required],
      payId: ['', Validators.required]
    });

    this.cancelForm = this.formBuilder.group({
      id: ['', Validators.required]
    });

    this.appointmentForm = this.formBuilder.group({
      id: ['', Validators.required]
    });
  }


  onSubmit(form: FormGroup) {
    this.appointment.payment = new IPayment();
     this.paymentService.getPaymentById(form.value.payId).subscribe({
       next: payment =>{
         this.appointment.payment = payment;
       }
     });
   
    let resp = this.appointmentService.addAppointment(this.userForm.value);
    resp.subscribe((data) => {
      console.log("Form submitted.");
      alert(`Appointment booked successfully.`);
      this.userForm.reset();
    });
  }

  onView(form: FormGroup) {
    this.appointmentService.getAppointmentById(form.value.id).subscribe({ 
      next: appointment =>{
      this.appointment=appointment;
    }
  });    
  }

  onCancel(form: FormGroup) {
    this.appointmentService.deleteAppointment(form.value.id).subscribe({ 
      next: appointment =>{
      this.appointment=appointment;
      alert(`Appointment Canceled successfully.`);
    }
  });
  this.cancelForm.reset();
    this.openForm=4;
  }

  ngOnInit(): void {
    console.log('AppointmentComponent.ngOnInit');
    this.appointmentForm = this.formBuilder.group({
      id: ['', Validators.required],
    });
  }

  click(input: number) {
    this.openForm = input;
  }






}
