import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService } from '../../common-services/api-management/api/login/login.service';
import {ApiManagementService} from '../../common-services/api-management/api-management.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  revealPassword: boolean;
  private usernameMaxLength = 255;

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiManagementService: ApiManagementService
  ) {
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

    this.loginForm = this.formBuilder.group({
      username,
      password
    });
  }

  ngOnInit() {
  }

  submit() {
    this.apiManagementService.login(this.loginForm.value);
  }

}
