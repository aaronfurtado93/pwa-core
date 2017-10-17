import { Validators } from '@angular/forms';

export class UsernameValidation {

  private usernameMaxLength = 255;

  getValidations(value?: string) {
    return [
      value || '',
      Validators.compose([
        Validators.required,
        Validators.pattern(/^\w{3,64}@\w+[.\w]+$/),
        Validators.maxLength(this.usernameMaxLength)
      ])
    ];
  }
}
