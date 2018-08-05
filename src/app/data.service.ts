import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // This gets the data from the fake API 
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
