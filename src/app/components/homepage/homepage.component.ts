import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

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
