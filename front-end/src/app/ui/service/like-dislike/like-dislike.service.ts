import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import {DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class LikeDislikeService {

  constructor(private firestore: AngularFirestore, private db: DataService) { }
  addLike(vid , uid) {
    return this.db.addLike(vid, uid);
  }
  addDislike(vid, uid) {
    return this.db.addDislike(vid, uid);
  }
  removeLike(vid, uid) {
    return this.db.removeLike(vid, uid);
  }
  removeDislike(vid, uid) {
    return this.db.removeDislike(vid, uid);
  }
}
