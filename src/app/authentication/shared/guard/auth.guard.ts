import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AccountService } from '../Services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router){ }

  public canActivate(): boolean {
    const token = localStorage.getItem('token');
    
    if (token) return true;
    
    this.router.navigate(['/login']);
    return false;
  }  
}
