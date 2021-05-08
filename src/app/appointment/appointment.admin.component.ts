import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IAppointment } from "../models/appointment";
import { AppointmentService } from "../services/appointment.service";

@Component({
  selector: 'app-appointment-admin',
  templateUrl: './appointment.admin.component.html',
  styleUrls: ['./appointment.admin.component.css']
})
export class AppointmentAdminComponent implements OnInit {
  allAppointmentForm: FormGroup;
  openAppointmentForm: FormGroup;
  byIDForm: FormGroup;
  updateForm: FormGroup;
  cancelForm: FormGroup;
  openForm: number = null;
  appointment: IAppointment = new IAppointment();
  appointments: IAppointment[]=[];
  

  constructor(private appointmentService: AppointmentService, private formBuilder: FormBuilder) {
    
    this.allAppointmentForm = this.formBuilder.group({});

    this.openAppointmentForm = this.formBuilder.group({});

    this.cancelForm = this.formBuilder.group({
      id: ['', Validators.required]
    });

    this.byIDForm = this.formBuilder.group({
      id: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup){
    this.appointmentService.getAllAppointments().subscribe({
      next: appointments =>{
        this.appointments=appointments;
      }
    });
  }

  viewByID(form: FormGroup){
    this.appointmentService.getAppointmentById(form.value.id).subscribe({ 
      next: appointment =>{
      this.appointment=appointment;
    }
  });  
  }

  onUpdate(form:FormGroup){

  }

  onCancel(form: FormGroup){
    this.appointmentService.deleteAppointment(form.value.id).subscribe({ 
      next: appointment =>{
      this.appointment=appointment;
      alert(`Appointment Canceled successfully.`);
    }
  });
  this.cancelForm.reset();
    
  }

  viewOpen(form: FormGroup){
    this.appointmentService.getOpenAppointments().subscribe({ 
      next: appointments =>{
      this.appointments=appointments;
    }
  });
  }

  ngOnInit(): void {

  }
  click(input: number) {
    this.openForm = input;
  }

}
