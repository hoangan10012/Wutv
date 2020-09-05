import { Component, OnInit } from '@angular/core';
import { BoxChatService } from '../../ui/service/comments/box-chat.service'
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {
  data_have = false;
  fromId: string;
  ToId: string;
  content: string;
  incomingData$: Array<string>;
  vid: string;
  src: string;
  vidName: string;
  public videoid;
  constructor(private BoxChatService: BoxChatService, private route: ActivatedRoute, private http: HttpClient) {
    this.vid = this.route.snapshot.params['id'];
    console.log(this.vid);
    
    // this.listen('chỗ này sau này login ');
  }
  //  public listen(id:string){
  //    this.BoxChatService.listen(id);
  //  }

  public send(content: string) {
    this.BoxChatService.addMessage({
      comment: content
    }).subscribe()

  }
  ngOnInit() {
    this.http.get(environment.endpoint + '/v1/video/' + this.vid).toPromise().then(data => {
      console.log(data);
      this.src = data['data']['downloadURL'];
      console.log(this.src)
      this.vidName = data ['path'];
      this.data_have = true;
    })
  
  }
}
