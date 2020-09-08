import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { data } from '../../models/data.model';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private fb: AngularFirestore, private ht: HttpClient, private _afs: AngularFirestore) { }

  public async getvideo() {
    let videos = Array<data>();
    return this.ht.get(environment.endpoint + "/v1/videos").toPromise().then((data => {
      let dataListRaw = <Array<any>>data['videos'];
      for (let i = 0; i < dataListRaw.length; i++) {
        videos.push(<data>dataListRaw[i]);
      }
      console.log (videos);
      return videos;
    }));

  }

  addLike( vid, uid) {
    this._afs
    .collection('videos')
    .doc(vid)
    .update({
      likes : firebase.firestore.FieldValue.arrayUnion(uid)
    });
    this._afs
    .collection('users')
    .doc(uid)
    .update({
      likes: firebase.firestore.FieldValue.arrayUnion(vid)
    });
  }

  addDislike( vid, uid) {
    this._afs
    .collection('videos')
    .doc(vid)
    .update({
      dislikes : firebase.firestore.FieldValue.arrayUnion(uid)
    });
    this._afs
    .collection('users')
    .doc(uid)
    .update({
      dislikes : firebase.firestore.FieldValue.arrayUnion(vid)
    });
  }

  removeLike(vid, uid) {
    this._afs
    .collection('videos')
    .doc(vid)
    .update({
      likes : firebase.firestore.FieldValue.arrayRemove(uid)
    });
    this._afs
    .collection('users')
    .doc(uid)
    .update({
      likes : firebase.firestore.FieldValue.arrayRemove(vid)
    });
  }

  removeDislike(vid, uid) {
    this._afs
    .collection('videos')
    .doc(vid)
    .update({
      dislikes : firebase.firestore.FieldValue.arrayRemove(uid)
    });
    this._afs
    .collection('users')
    .doc(uid)
    .update({
      dislikes : firebase.firestore.FieldValue.arrayRemove(vid)
    });
  }


}
