import { Injectable } from '@angular/core';
import { IloginData } from '../../interfaces/ilogin-data';
import { LoginService } from './api/login/login.service';
import { LogoutService } from './api/logout/logout.service';

@Injectable()
export class ApiManagementService {

  constructor(
    private loginService: LoginService,
    private logoutService: LogoutService,
  ) { }

  login(loginData: IloginData) {
    return this.loginService.login(loginData);
  }

  logout() {
    return this.logoutService.logout();
  }

}
