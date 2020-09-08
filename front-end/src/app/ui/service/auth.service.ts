import { Injectable } from '@angular/core';
import {auth} from 'firebase';
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
  logged = false;
  endpoint = "http://127.0.0.1";
  port = 8080;
  constructor(public _auth:AngularFireAuth, public router: Router, private httpClient:HttpClient ) { 
    this._auth.user.subscribe(usr => {
      if (usr != null) {
        this.user = usr;
        
        this.logged = true;
      } else { this.logged = false; }
    });
  }
  public async login()
  {
    try{
      let provider = new auth.GoogleAuthProvider();
      await this._auth.signInWithPopup(provider);
      this.user = await this._auth.currentUser;
      await this.httpClient.post(this.endpoint+':'+this.port+'/v1/User/Post', {
        id: this.user.uid,
        type: "",
        lastTime: new Date().getDate(),
        name: this.user.displayName,
        email: this.user.email,
        avatarURL: this.user.photoURL,
        videos: [],
        likes : [],
        dislikes: []
      }).toPromise();
      this.router.navigate(['home']);
  
    }catch(err){
        console.log(err)
    }
  }
  public async logout (){
    await this._auth.signOut();
    this.user = null;
  }
  
  
}
