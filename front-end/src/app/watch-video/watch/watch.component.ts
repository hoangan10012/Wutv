import { Component, OnInit } from '@angular/core';
import { BoxChatService } from '../../ui/service/comments/box-chat.service'
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { AngularFirestore } from '@angular/fire/firestore';
import { LikeDislikeService } from '../../ui/service/like-dislike/like-dislike.service'
import { AuthenticationService } from "../../ui/service/auth.service"
interface Comment {
  name: string;
  photoURL: string;
  content: string;
}
@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})

export class WatchComponent implements OnInit {
  data_have = false;
  content: string;
  getcomment: Array<Comment> = Array<Comment>();
  vid: string;
  src: string;
  button_like = '';
  button_dislike = '';
  vidName: string;
  public videoid;
  view_total: number = 0;
  like_count = '100';
  dislike_count = '20';
  constructor(private route: ActivatedRoute, public current_user: AuthenticationService, private like_dislike_service: LikeDislikeService, private BoxChatService: BoxChatService, private http: HttpClient, private fb: AngularFirestore) {
    this.vid = this.route.snapshot.params.id;
  }
  videoinfo: Object;
  public send(content: string) {
    this.BoxChatService.addMessage({
      comment: content
    }, this.vid).subscribe();
  }

  public async listen() {
    await this.BoxChatService.listenComment(this.vid).subscribe(data => {
      this.getcomment = [];
      let arrayId = data.payload.data()["commentId"] as Array<string>;
      //console.log(arrayId);
      let docRefComment = this.fb.collection("Comment");
      let docRefUser = this.fb.collection("User");
      arrayId.forEach(element => {
        docRefComment.doc(element).get().toPromise().then(async value => {
          let content = value.data()['content'];
          await docRefUser.doc(value.data()['uid']).get().toPromise().then(valueUser => {
            let comment: Comment = {
              name: valueUser.data()['name'],
              photoURL: valueUser.data()["avatarURL"],
              content: content,
            };

            this.getcomment.push(comment);
          })
        })
      });
    });
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
        console.log(data)
        let id = parseInt(this.route.snapshot.paramMap.get('id'))
        this.src = data['data']['downloadURL'];
        console.log(this.src)
        this.vidName = data['path'];
        this.data_have = true;
        this.listen();
        this.fb.collection('videos').doc(this.vid).get().subscribe(data => {
          this.view_total += data.data()['views'];
          this.fb
            .collection('videos')
            .doc(this.vid)
            .update({
              views: this.view_total + 1
            })
            .then(() => {
              this.fb
                .collection('videos')
                .doc(this.vid)
                .snapshotChanges()
                .subscribe(data => {
                  this.videoinfo = data.payload.data();
                  //console.log(this.videoinfo);
                  this.src = this.videoinfo['url'];
                  //console.log(this.src);
                  this.like_count = this.videoinfo['likes'].length;
                  this.dislike_count = this.videoinfo['dislikes'].length;
                  this.view_total = this.videoinfo['views'];
            })
      })
  })
      })
    }
  }



