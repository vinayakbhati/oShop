import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {
  user$:Observable<firebase.User>;
  
  constructor(private afAuth: AngularFireAuth,
              private route: ActivatedRoute)
 { 
   //getting user details from google with the help of
    this.user$=afAuth.authState;
    console.log("AuthService");
  }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl);
    console.log(returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout(){
    this.afAuth.auth.signOut();
  }
}
