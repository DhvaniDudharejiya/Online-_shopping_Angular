import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public productlist = new BehaviorSubject<any>([])
  baseURL = "http://localhost:3000/"
  cartitemlist: any = []


  constructor(private http: HttpClient) { }

  getrecords(table: string) {
    return this.http.get(this.baseURL + table)
  }

}
