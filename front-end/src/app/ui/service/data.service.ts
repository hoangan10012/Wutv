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

  constructor() { }

}
