import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UsernameValidation } from '../../../../classes/validation/username-validation';
import { PasswordValidation } from '../../../../classes/validation/password-validation';

@Injectable()
export class RegisterService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  register(): FormGroup {
    const username = new UsernameValidation().getValidations();
    const password = new PasswordValidation().getValidations();
    const confirmPassword = new PasswordValidation().getValidations();

    return this.formBuilder.group({
      username,
      password,
      confirmPassword
    });
  }


}
