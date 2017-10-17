import { Validators } from '@angular/forms';

export class PasswordValidation {

  getValidations(value?: string) {
    return [
      value || '',
      Validators.compose([
        Validators.pattern(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@!%*#?&`~^()\-_\[\]{}:;'])[A-Za-z\d$@!%*#?&`~^()\-_\[\]{}:;']{8,20}$/
        ),
        Validators.required
      ])
    ];
  }
}
