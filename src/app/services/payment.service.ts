import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {tap, catchError } from "rxjs/operators"
import { IOrder } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  orderApi: string="http://localhost:8090/Order/getOrderDetails/"
  constructor(private httpClient: HttpClient) { }

  public getOrderDetails(id: number): Observable<IOrder>{
    return this.httpClient.get<IOrder>(`${this.orderApi}${id}`).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
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
