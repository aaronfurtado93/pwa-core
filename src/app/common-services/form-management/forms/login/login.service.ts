import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsernameValidation } from '../../../../classes/validation/username-validation';
import { PasswordValidation } from '../../../../classes/validation/password-validation';

@Injectable()
export class LoginService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  login(): FormGroup {
    const username = new UsernameValidation().getValidations();
    const password = new PasswordValidation().getValidations();

    return this.formBuilder.group({
      username,
      password
    });
  }

}
