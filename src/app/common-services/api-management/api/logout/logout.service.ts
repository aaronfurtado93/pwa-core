import { Injectable } from '@angular/core';
import {AppStateManagementService} from '../../../app-state-management/app-state-management.service';

@Injectable()
export class LogoutService {

  constructor(
    private appStateManagementService: AppStateManagementService
  ) { }

  logout() {
    this.appStateManagementService.removeAllLS()
      .then();
  }
}
