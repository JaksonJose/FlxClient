import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AccountService } from '../Services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private service: AccountService){ }

  public canActivate(): boolean {
    if (this.service.isUserLoggedIn()) return true;
      
    this.router.navigate(['/login']);
    return false;
  }  
}
