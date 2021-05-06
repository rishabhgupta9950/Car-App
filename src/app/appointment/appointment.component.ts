import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  userForm: FormGroup;
  openForm: number = null;
  
 
  
  
  constructor(private formBuilder: FormBuilder) { 

    this.userForm = this.formBuilder.group({
      custId: '',
      location: '',
      inspectionType: '',
      preferredDate: '',
      preferredTime: '',
      payId: ''
        });
  }
  
  
  onSubmit(form: FormGroup) {
    alert(`User registered successfully.`);
    console.log(form.value.name);
    this.userForm.reset();
  }

  ngOnInit(): void {
  }

  click(input:number)
  {
    this.openForm = input;
  }



  
  

}
