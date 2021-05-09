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
  delete: IAppointment;
  app: IAppointment;
  appointment: IAppointment = new IAppointment();
  appointments: IAppointment[] = [];


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

  onSubmit(form: FormGroup) {
    this.appointmentService.getAllAppointments().subscribe({
      next: appointments => {
        this.appointments = appointments;
      }
    });
  }

  viewByID(form: FormGroup) {
    this.appointmentService.getAppointmentById(form.value.id).subscribe({
      next: appointment => {
        this.app = appointment;
      }
    });
    this.byIDForm.reset();
    this.openForm = 2;
  }

  onUpdate(form: FormGroup) {
    let id = this.updateForm.controls.id.value;
    let custId = this.updateForm.controls.custId.value;
    let location = this.updateForm.controls.location.value;
    let inspectionType = this.updateForm.controls.inspectionType.value;
    let preferredDate = this.updateForm.controls.preferredDate.value;
    let preferredTime = this.updateForm.controls.preferredTime.value;
    let payId = this.updateForm.controls.payId.value;

    this.appointmentService.updateAppointment(id, location, inspectionType, preferredDate, preferredTime, custId, payId).subscribe((data) => {
      console.log("Form submitted.");
      alert(`Appointment Updated successfully.`);
      this.updateForm.reset();
    });

  }

  onCancel(form: FormGroup) {
    this.appointmentService.deleteAppointment(form.value.id).subscribe({
      next: appointment => {
        this.delete = appointment;

      }
    });
    this.cancelForm.reset();
    this.openForm = 4;
  }

  viewOpen(form: FormGroup) {
    this.appointmentService.getOpenAppointments().subscribe({
      next: appointments => {
        this.appointments = appointments;
      }
    });
  }

  ngOnInit(): void {

  }
  click(input: number) {
    this.openForm = input;
  }

}
