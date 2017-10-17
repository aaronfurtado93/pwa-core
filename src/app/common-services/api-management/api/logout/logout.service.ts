import { Injectable } from '@angular/core';
import { AppStateManagementService } from '../../../app-state-management/app-state-management.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class LogoutService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private appStateManagementService: AppStateManagementService
  ) { }

  logout() {
    this.angularFireAuth.auth.signOut()
      .then(() => this.appStateManagementService.removeAllLS());
  }
}
