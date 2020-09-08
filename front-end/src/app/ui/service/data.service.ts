import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { data } from '../../models/data.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor( // tslint:disable-next-line:variable-name
    private _afs: AngularFirestore,
    // tslint:disable-next-line:variable-name
    private _storage: AngularFireStorage,
    // tslint:disable-next-line:variable-name
    private _afn: AngularFireFunctions) { }



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
