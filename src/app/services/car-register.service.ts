import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {ICar} from '../models/car'
import { Observable, throwError } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CarRegisterService {

  private getUrl: string = "http://localhost:8090/Cars/GetCars";

  cartItems: number[] = [];
  cart:any;

  constructor(private http: HttpClient) { }

  doRegistration(car: ICar)
  {
    console.log(car);
    return this.http.post("http://localhost:8090/Cars/add",car);
    // {responseType:'text' as 'json'}
  }

  getAllCars(): Observable<ICar[]>{
    return this.http.get<ICar[]>(this.getUrl);
    // .pipe(map(response=>response));
  }
  
  deleteCarRecord(id:number): Observable<any>{
    // console.log(id);
    // return this.http.delete(`http://localhost:8090/Cars/delete/${id}`, {responseType: 'text'});
    return this.http.delete<ICar>(`http://localhost:8090/Cars/delete/${id}`).pipe(
      tap(data => console.log('Deleted Data', JSON.stringify(data))),
      catchError(this.handleError)
    )
  }

  cartDetails(id:number,num:number):number
  {
    
    this.cartItems.length=num;
    this.cartItems.push(id);
    console.log("Car Item length  :"+this.cartItems.length);
    localStorage.setItem('len',JSON.stringify(this.cartItems.length));
    localStorage.setItem('user',JSON.stringify(this.cartItems));

    // console.log(JSON.parse(localStorage.getItem('len')));
    // this.cart=num+JSON.parse(localStorage.getItem('len'));
    // console.log("Actual: "+this.cart);
    // return this.cart;
    // return this.cartItems.length;
    return JSON.parse(localStorage.getItem('len'));
  }

  getCar(id:number):Observable<ICar>{
      // return this.http.get<ICar>(`http://localhost:8090/Cars/GetCar/${id}`);
      return this.http.get<ICar>(`http://localhost:8090/Cars/GetCar/${id}`).pipe(
        tap(data => console.log('Car Data', JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  updateCar(car: ICar){
    return this.http.put(`http://localhost:8090/Cars/update`,car);
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
