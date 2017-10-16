import { Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable()
export class LoginService {

  private usernameMaxLength = 255;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  login(): FormGroup {
    const username = [
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(/^\w{3,64}@\w+[.\w]+$/),
        Validators.maxLength(this.usernameMaxLength)
      ])
    ];

    const password = [
      '',
      Validators.compose([
        Validators.pattern(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@!%*#?&`~^()\-_\[\]{}:;'])[A-Za-z\d$@!%*#?&`~^()\-_\[\]{}:;']{8,20}$/
        ),
        Validators.required
      ])
    ];


    return this.formBuilder.group({
      username,
      password
    });
  }

}
