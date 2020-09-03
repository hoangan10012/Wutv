import { Component, OnInit } from '@angular/core';
import {BoxChatService} from '../../ui/service/comments/box-chat.service'
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

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
  public videoid;
  constructor(private BoxChatService : BoxChatService, private route: ActivatedRoute ) {
      this.listen('chỗ này sau này login ');
   }
   public listen(id:string){
     this.BoxChatService.listen(id);
   }
    public send(){
    this.BoxChatService.send("chỗ này sau này login ",this.Content);
   }
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    this.videoid = id;
  }
}
