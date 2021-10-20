import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.css']
})
export class MyskillsComponent implements OnInit {

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