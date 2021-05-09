import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IAppointment } from '../models/appointment';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private appointmentApi: string = 'http://localhost:8090/Appointment';


  constructor(private httpClient: HttpClient) {
    console.log('constrcutorAppointmentService');
  }

  public getAppointmentById(id: number): Observable<IAppointment> {
    console.log('getAppointmentByIdAppointmentService');
    return this.httpClient.get<IAppointment>(`${this.appointmentApi}/GetAppointment/${id}`).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    }
    else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  addAppointment(id: number, location: string, inspectionType: string, preferredDate: string, preferredTime: string, custId: number, payId: number) {

    return this.httpClient.post(`${this.appointmentApi}/add/${id}/${location}/${inspectionType}/{preferredDate}/{preferredTime}/${custId}/${payId}?preferredDate=${preferredDate}&preferredTime=${preferredTime}`, '');

  }

  updateAppointment(id: number, location: string, inspectionType: string, preferredDate: string, preferredTime: string, custId: number, payId: number) {

    return this.httpClient.put(`${this.appointmentApi}/update/${id}/${location}/${inspectionType}/{preferredDate}/{preferredTime}/${custId}/${payId}?preferredDate=${preferredDate}&preferredTime=${preferredTime}`, '');

  }

  public deleteAppointment(id: number): Observable<IAppointment> {
    return this.httpClient.delete<IAppointment>(`${this.appointmentApi}/delete/${id}`).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  public getAllAppointments(): Observable<IAppointment[]> {
    return this.httpClient.get<IAppointment[]>(`${this.appointmentApi}/GetAppointments`).pipe(
      tap(data => console.log('Appointment Data', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  public getOpenAppointments(): Observable<IAppointment[]> {
    return this.httpClient.get<IAppointment[]>(`${this.appointmentApi}/GetOpenAppointments`).pipe(
      tap(data => console.log('Appointment Data', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

}
