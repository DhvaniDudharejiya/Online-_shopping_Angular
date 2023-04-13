import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseURL = "http://localhost:3000/"
  constructor(private http: HttpClient) { }
 
  getrecords(table: string) {
    return this.http.get(this.baseURL + table)
  }
  //to read a single record ***********************************************************
  getrecord(table: string, id: any) {
    const getURL = `${this.baseURL}${table}/${id}`
    return this.http.get(getURL)
  }
  //delete record **************************************************************************
  deleteRecord(table: string, id: any) {
    const delURL = `${this.baseURL}${table}/${id}` //use backtick
    return this.http.delete(delURL)
  }
  //Add record ***********************************************************************
  addRecord(table: string, productData: any) {
    return this.http.post(this.baseURL + table, productData)
  }
  //update record ****************************************************************
  updateRecord(table: string, productData: any) {
    const putURL = `${this.baseURL}${table}/${productData.id}`
    return this.http.put(putURL, productData)
  }

//Store the user in the sessionStorage
signIn(user:string){
  sessionStorage.setItem("user",user)
}
// Remove the user from the sessionStorage
signOut(){
  sessionStorage.removeItem("user")
}
}
