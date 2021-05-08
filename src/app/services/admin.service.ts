import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../models/customer';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  adminApi: string="localhost:8090/user/SignIn";

  public SignIn(userId,password):Observable<ICustomer> {

    return this.httpClient.post<ICustomer>(`${this.adminApi}/${userId}/${password}`,'');
  }

  constructor(private httpClient: HttpClient) { }
}
