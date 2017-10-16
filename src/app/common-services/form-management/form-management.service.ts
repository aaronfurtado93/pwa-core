import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from './forms/login/login.service';

@Injectable()
export class FormManagementService {

  constructor(
    private loginService: LoginService
  ) { }

  createForm(formName: string): FormGroup {
    switch (formName) {
      case `login`:
        return this.loginService.login();
      default:
        return;
    }
  }
}
