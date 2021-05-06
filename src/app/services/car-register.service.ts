import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {ICar} from '../models/car'

@Injectable({
  providedIn: 'root'
})
export class CarRegisterService {

  constructor(private http: HttpClient) { }

  public doRegistration(car: ICar)
  {
    return this.http.post("http://localhost:8090/Cars/add",car,{responseType:'text' as 'json'});
  }
 }
