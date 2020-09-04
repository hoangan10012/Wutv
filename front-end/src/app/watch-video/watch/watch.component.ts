import { Component, OnInit } from '@angular/core';
import {BoxChatService} from '../../ui/service/comments/box-chat.service'
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot } from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore'
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

  getcomment =[];
  content : string;
  public videoid = "4knjDpixpya6mEzBort1";
  constructor(private BoxChatService : BoxChatService, private route: ActivatedRoute,private fb : AngularFirestore ) {
  }

    public send(content: string){
    this.BoxChatService.addMessage({
      comment: content
          }).subscribe();

    // this.fb.collection('Comment').doc().snapshotChanges();
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

  //  public del(content: string){
  //   this.BoxChatService.DeleteMessage({
  //     comment: content
  //         }).subscribe();
  //       }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    //this.videoid = id;
    this.listen();
  }
}
