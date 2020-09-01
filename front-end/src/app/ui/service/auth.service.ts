import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {User} from '../../models/user.model'
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService 
{
  public user:firebase.User=null;
  constructor(public auth:AngularFireAuth, public router: Router, private httpClient:HttpClient ) { }
  public async login()
  {
    try{
      let provider = new firebase.auth.GoogleAuthProvider();
      await this.auth.signInWithPopup(provider);
      this.user=await this.auth.currentUser;
      await this.httpClient.post<User>(environment.endpoint+'/v1/User/Post', {
        uid: this.user.uid,
        type: "",
        lastTime: new Date().getDate(),
        name: this.user.displayName,
        email: this.user.email,
        avatarURL: this.user.photoURL,
        videos: [],
        likes : [],
        dislikes: []
      });

      this.router.navigate(["/home"]);
  
    }catch(err){
        console.error(err)
    }
  }
  public async logout (){
    await this.auth.signOut;
    this.user = null;
  }
  
  
}