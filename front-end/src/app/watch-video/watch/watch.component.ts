import { Component, OnInit } from '@angular/core';
import { BoxChatService } from '../../ui/service/comments/box-chat.service'
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { AngularFirestore } from '@angular/fire/firestore';
import {LikeDislikeService} from '../../ui/service/like-dislike/like-dislike.service'
import {AuthenticationService} from "../../ui/service/auth.service"
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
  button_like = '';
  button_dislike = '';
  vidName: string;
  public videoid;

  constructor(public current_user: AuthenticationService,private like_dislike_service:LikeDislikeService,private BoxChatService: BoxChatService, private route: ActivatedRoute, private http: HttpClient,private fb :AngularFirestore) {
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
       async check_user() {
        if (!this.current_user.logged) {
          await this.current_user.login();
          window.location.reload();
        }
      }
   //like and dislike button
  async activebutton_like() {
    this.button_like = 'primary';
    await this.like_dislike_service.addLike(
      this.vid,
      this.current_user.user.uid
    );
  }
  async activebutton_dislike() {
    this.button_dislike = 'primary';
    await this.like_dislike_service.addDislike(
      this.vid,
      this.current_user.user.uid
    );
  }
  async disablebutton_like() {
    this.button_like = '';
    await this.like_dislike_service.removeLike(
      this.vid,
      this.current_user.user.uid
    );
  }
  async disablebutton_dislike() {
    this.button_dislike = '';
    await this.like_dislike_service.removeDislike(
      this.vid,
      this.current_user.user.uid
    );
  }
  async onclick_like() {
    await this.check_user();
    if (this.button_like != '') {
      this.disablebutton_like();
    } else if (this.button_dislike != '') {
      this.activebutton_like();
      this.disablebutton_dislike();
    } else {
      this.activebutton_like();
    }
  }
  async onclick_dislike() {
    await this.check_user();
    if (this.button_dislike != '') {
      this.disablebutton_dislike();
    } else if (this.button_like != '') {
      this.activebutton_dislike();
      this.disablebutton_like();
    } else {
      this.activebutton_dislike();
    }
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
