import { Component, OnInit } from '@angular/core';
import {BoxChatService} from '../../ui/service/comments/box-chat.service'
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

  fromId : string;
  ToId : string;
  Content : string ;
  incomingData$ : Array<string>;

  constructor(private BoxChatService : BoxChatService ) {
      this.listen(' ');
   }
   public listen(id:string){
     this.BoxChatService.listen(id);
   }
    public send(){
    this.BoxChatService.send("chỗ này sau này login",this.Content);
   }
  ngOnInit(): void {
  }

}
