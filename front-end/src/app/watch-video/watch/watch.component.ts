import { Component, OnInit } from '@angular/core';
import { BoxChatService } from '../../ui/service/comments/box-chat.service'
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {
  data_have = false;

  content: string;
  getcomment = [];
  vid: string;
  src: string;
  vidName: string;
  public videoid;

  constructor(private BoxChatService: BoxChatService, private route: ActivatedRoute, private http: HttpClient,private fb :AngularFirestore) {
    this.vid = this.route.snapshot.params['id'];
  }

  public send(content: string) {
    this.BoxChatService.addMessage({
      comment: content
    }).subscribe();
  }

    public async  listen (){
      await this.BoxChatService.listenComment(this.videoid).subscribe(data => {
        let arrayId  = data.data()["comments"] as Array<string>;
        let docRefComment = this.fb.collection("Comment");
        arrayId.forEach(element =>{
         docRefComment.doc(element).get().toPromise().then(value =>{
           console.log(value.data());
           this.getcomment.push(value.data());
          })
        })
      })
       }
  
   
  
  ngOnInit() {
    this.http.get(environment.endpoint + '/v1/video/' + this.vid).toPromise().then(data => {
      console.log(data);
      let id = parseInt(this.route.snapshot.paramMap.get('id'))
      this.src = data['data']['downloadURL'];
      console.log(this.src)
      this.vidName = data ['path'];
      this.data_have = true;
      
         this.listen();
    })
  
  }
}
