import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {

  
  constructor(public auth: AuthService) {
    //Object of login google
    //afAuth.authState.subscribe( x => console.log(x));
    //login
    //afAuth.authState.subscribe( user => this.user =user);
     }
logout(){
  this.auth.logout();
}
 

}
