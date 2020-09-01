import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService 
{
  public user:firebase.User=null;
  constructor(public auth:AngularFireAuth, public router: Router ) { }
  public async login()
  {
    try{
      let provider = new firebase.auth.GoogleAuthProvider();
      await this.auth.signInWithPopup(provider);
      this.user=await this.auth.currentUser;
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
