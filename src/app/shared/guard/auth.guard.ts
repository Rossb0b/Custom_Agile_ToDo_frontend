// import { CanActivate } from '@angular/router/src/utils/preactivation';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(): boolean {
    const isAuth = this.authService.isLoggedIn();
    if (!isAuth) {
      this.router.navigate(['/login']);
    }
    return isAuth;
  }
}
