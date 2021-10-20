import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http: HttpClient) { }

  getData(){
    let url:string = "http://portfolio-dotnet.herokuapp.com/api/v1/biodata/2"
    return this.http.get(url);
  }
}
