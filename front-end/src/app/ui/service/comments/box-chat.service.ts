import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Router } from '@angular/router';

import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class BoxChatService {

  vid: String;
  constructor(
    private firestore: AngularFirestore,
    private auth: AuthenticationService,
    public router: Router,
    private httpClient:HttpClient
    ) {
    }

    addMessage(content): Observable<any> {

      return this.httpClient.post(environment.endpoint + '/v1/Comment/Post', {
        uid: this.auth.user.uid,
        content: content,
        vid: this.vid,
        time: Date.now(),
        likes : [],
        dislikes: [],
        })
  }
public listenComment (vid:string){
  return this.firestore.collection("videos").doc(vid).get();
}
  }


