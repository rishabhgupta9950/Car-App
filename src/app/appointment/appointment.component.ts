import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IAppointment } from '../models/appointment';
import { AppointmentService } from '../services/appointment.service';


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




  constructor(private appointmentService: AppointmentService, private formBuilder: FormBuilder) {

    this.userForm = this.formBuilder.group({
      id: ['', Validators.required],
      custId: ['', Validators.required],
      location: ['', Validators.required],
      inspectionType: ['', Validators.required],
      preferredDate: ['', Validators.required],
      preferredTime: ['', Validators.required],
      payId: ['', Validators.required]
    });
  }


  onSubmit(form: FormGroup) {
    let resp = this.appointmentService.addAppointment(this.userForm.value);
    resp.subscribe((data) => {
      console.log("Form submitted.");
      alert(`Appointment booked successfully.`);
      this.userForm.reset();
    });
  }

  onView(form: FormGroup) {
    this.appointmentService.getAppointmentById(form.value.id).subscribe(data => this.appointment = data);
  }

  onCancel(form: FormGroup) {
    this.appointmentService.deleteAppointment(form.value.id).subscribe(data => this.appointment = data);
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
