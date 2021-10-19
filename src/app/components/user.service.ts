import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  fg:any={};
  constructor(private http: HttpClient) { }

  getData():any{
    let url:string = "http://portfolio-dotnet.herokuapp.com/api/v1/biodata/2"
    this.http.get(url).subscribe((resp:any)=>{this.fg=resp;})
  }
}
