import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // isLoggin : boolean = true
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    //window.alert("access denidde")


    if (!sessionStorage.getItem("user")) {
      // this.isLoggin = false
      return false;
    }
    else {
      return true
    }
    
  }
  
}
