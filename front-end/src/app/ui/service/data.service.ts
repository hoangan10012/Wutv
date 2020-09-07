import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

import * as firebase from 'firebase';
import {
  AngularFireStorageReference,
  AngularFireUploadTask,
  AngularFireStorage
} from '@angular/fire/storage';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';

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
