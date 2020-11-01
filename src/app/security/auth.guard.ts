import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private service:AuthenticationService,private router:Router ){}




canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
  if(this.service.loggedIn()){
    return true;
  }
  else{
     this.router.navigate(['/sign-in'])
    return false;
  }

}
  
}
