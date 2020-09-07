import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLogged: boolean;

  constructor(
    private _afAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  canActivate(): Observable<boolean> {
    return this._afAuth.authState.pipe(
      map<firebase.User, boolean>((user) => {
        if (user) {
          return true;
        } else {
          this.snackBar.open('You need to sign in to watch videos!', 'OK', {duration: 2000});
          this.router.navigate(['']);
          return false;
        }
      })
    );
  }
}
