import { Component, OnInit } from '@angular/core';
import {DataService} from '../ui/service/data.service';
// import {AuthenticationService} from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  listvideo =[]


  constructor( private dataservice : DataService) {
    this.getvideo();

  }
async getvideo (){
  let video = await this.dataservice.getvideo();
  console.log (video);
  this.listvideo = video
  console.log(this.listvideo)
}
  ngOnInit(): void {
  }


}
