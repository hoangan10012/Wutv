import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { Comments } from '../../ui/service/comments/comments';
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

  constructor(private _afs: AngularFirestore,  private _storage: AngularFireStorage,private _afn: AngularFireFunctions) { }
  addComment(comment: Comments) {
    this._afs
      .collection('comments')
      .add(comment)
      // tslint:disable-next-line:variable-name
      .then(comment_add => {
        console.log(comment_add.id);
        this._afs
          .collection('videos')
          .doc(comment.vid)
          .update({
            cid: firebase.firestore.FieldValue.arrayUnion(comment_add.id)
          });
      });
  }
}
