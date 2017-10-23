import { Injectable } from '@angular/core';

import { IloginRegisterData } from '../../interfaces/ilogin-data';
import { LoginService } from './api/login/login.service';
import { LogoutService } from './api/logout/logout.service';
import { RegisterService } from './api/register/register.service';

@Injectable()
export class ApiManagementService {

  constructor(
    private loginService: LoginService,
    private logoutService: LogoutService,
    private registerService: RegisterService
  ) { }

  login(loginData: IloginRegisterData) {
    return this.loginService.login(loginData);
  }

  logout() {
    return this.logoutService.logout();
  }

  register(registerData: IloginRegisterData) {
    return this.registerService.register(registerData);
  }

  googleLogin() {
    return this.loginService.googleLogin();
  }

}
