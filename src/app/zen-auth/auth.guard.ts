import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ZentraderAuthService } from './zentrader-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private zentraderAuthService: ZentraderAuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.verifyLogin();
  }


  verifyLogin(): boolean {
    const result = this.zentraderAuthService.isAuthenticated();
    if (!result) {
      this.router.navigate(['zenlogin']);
    }
    return result;
  }
}
