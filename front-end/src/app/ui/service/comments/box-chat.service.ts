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
    let comment = await this.firestore.collection('User').doc(from).collection('Comment').doc(Date.now().toString()).set(doc);
    console.log(comment);
  }
  catch(err){
    console.log (err);
  }

  }
  public listen(id : string){
    this.firestore.collection('User').doc(id).collection('Comment').snapshotChanges();
      }
}
