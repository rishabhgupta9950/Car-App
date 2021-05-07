import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {tap, catchError } from "rxjs/operators"
import { IOrder } from '../models/order';
import { IPayment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  orderApi: string="http://localhost:8090/Order/getOrderDetails/"
  paymentApi: string="http://localhost:8090/payment"
  constructor(private httpClient: HttpClient) { }

  public getOrderDetails(id: number): Observable<IOrder>{
    return this.httpClient.get<IOrder>(`${this.orderApi}${id}`).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  public getPaymentById(id: number): Observable<IPayment>{
    return this.httpClient.get<IPayment>(`${this.paymentApi}/get/${id}`).pipe(
      tap(data => console.log('Payment Data', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  public deletePayment(id: number): Observable<IPayment>{
    return this.httpClient.delete<IPayment>(`${this.paymentApi}/remove/${id}`).pipe(
      tap(data => console.log('Deleted Data', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  public getAllPayment(): Observable<IPayment[]>{
    return this.httpClient.get<IPayment[]>(`${this.paymentApi}/get`).pipe(
      tap(data => console.log('Payment Data', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  public addPAyment(pay: IPayment){
    return this.httpClient.post(`${this.paymentApi}/add`,pay);
  }

  public updatePayment(pay: IPayment){
    return this.httpClient.put(`${this.paymentApi}/update`,pay);
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
