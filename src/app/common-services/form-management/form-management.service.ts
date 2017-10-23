import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from './forms/login/login.service';
import {RegisterService} from './forms/register/register.service';

@Injectable()
export class FormManagementService {

  constructor(
    private loginService: LoginService,
    private registerService: RegisterService
  ) { }

  createForm(formName: string): FormGroup {
    switch (formName) {
      case `login`:
        return this.loginService.login();
      case `register`:
        return this.registerService.register();
      default:
        return;
    }
  }
}
