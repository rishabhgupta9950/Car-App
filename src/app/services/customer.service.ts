import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {tap, catchError } from "rxjs/operators"
import { ICustomer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerApi: string="http://localhost:8090/customer"
  constructor(private httpClient: HttpClient) { }


  public getCustomer(userId: number): Observable<ICustomer>{
    return this.httpClient.get<ICustomer>(`${this.customerApi}/get/${userId}`).pipe(
      tap(data => console.log('Customer Data', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  public removeCustomer(userId: number): Observable<ICustomer>{
    return this.httpClient.delete<ICustomer>(`${this.customerApi}/remove/${userId}`).pipe(
      tap(data => console.log('Deleted Data', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  public getAllCustomers(): Observable<ICustomer[]>{
    return this.httpClient.get<ICustomer[]>(`${this.customerApi}/get`).pipe(
      tap(data => console.log('Customers Data', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  public addCustomer(customer: ICustomer){
    return this.httpClient.post(`${this.customerApi}/add`,customer);
  }

  public updateCustomer(customer: ICustomer){
    return this.httpClient.put(`${this.customerApi}/update`,customer);
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage='';
    if(err.error instanceof ErrorEvent){
      errorMessage=`An error occured: ${err.error.message}`;
    }
    else{
      errorMessage=`Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}