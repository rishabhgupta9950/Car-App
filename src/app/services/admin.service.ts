import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IAdmin } from '../models/admin';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  adminApi: string="http://localhost:8090/user/SignIn";

  public SignIn(userId,password):Observable<IAdmin> {

    return this.httpClient.post<IAdmin>(`${this.adminApi}/${userId}/${password}`,'').pipe(
      tap(data =>console.log('Admin Data', JSON.stringify(data))),
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

  constructor(private httpClient: HttpClient) { }
}
