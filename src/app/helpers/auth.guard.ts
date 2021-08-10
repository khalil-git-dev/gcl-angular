import { AuthService } from 'src/app/services/auth.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authentificationService: AuthService
    ) {}
    canActivate(router: ActivatedRouteSnapshot, statut: RouterStateSnapshot ) {
        const currentUser = this.authentificationService.currentUserValue;
        if (currentUser) {
            return true;
        }
        
        this.router.navigate(['/login'], { queryParams: {returnUrl: statut.url }} );
        return false;
    }
}