import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class BoxChatService {

  constructor(private firestore: AngularFirestore) { }
  public async send (from :string , content: string){
    let doc={
      from:from,
      content:content,
    };
    try{
    let comment = await this.firestore.collection('Comment').doc(from).set(doc);
    console.log(doc.content);
  }
  catch(err){
    console.log (err);
  }

  }
  public listen(id : string){
    this.firestore.collection('User').doc(id).collection('Comment').snapshotChanges();
      }
}
