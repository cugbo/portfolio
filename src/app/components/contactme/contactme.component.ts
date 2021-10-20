import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {

  data:any={}

  constructor(private bio:UserService) { }

  ngOnInit() {
    
    this.bio.getData().subscribe(
      (resp:any)=>{
        this.data=resp
      },
      ()=>{}
    )
  }

}