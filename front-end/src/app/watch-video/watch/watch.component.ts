import { Component, OnInit } from '@angular/core';
import {BoxChatService} from '../../ui/service/comments/box-chat.service'
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

  fromId : string;
  ToId : string;
  content : string;
  incomingData$ : Array<string>;

  constructor(private BoxChatService : BoxChatService ) {

   }

    public send(content: string){
    this.BoxChatService.addMessage({
      comment: content
    }).subscribe();

   }
  ngOnInit(): void {
  }
}
