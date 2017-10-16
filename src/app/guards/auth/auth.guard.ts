import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AppStateManagementService} from '../../common-services/app-state-management/app-state-management.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private appStateManagementService: AppStateManagementService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
