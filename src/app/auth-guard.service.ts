import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private auth: AuthService,
              private router:Router
    ) { }

  canActivate(state : RouterStateSnapshot, route:RouterStateSnapshot ){
    this.auth.user$.subscribe(user => {
      if(user) 
      {console.log("true");
      return true;}

      else{
      this.router.navigate(['/login'], {queryParams:{returnUrl: state.url}});
    console.log("false");
      console.log(state.url);
      return false;}
    });
  }
}
