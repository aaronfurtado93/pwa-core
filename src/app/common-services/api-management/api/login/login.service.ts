import { Injectable } from '@angular/core';
import { IloginData } from '../../../../interfaces/ilogin-data';
import { AppStateManagementService } from '../../../app-state-management/app-state-management.service';

@Injectable()
export class LoginService {

  constructor(
    private appStateManagementService: AppStateManagementService
  ) { }

  login(loginData: IloginData) {
    this.appStateManagementService.setLS(`authentication-token`, JSON.stringify(loginData))
      .then();
  }

}
