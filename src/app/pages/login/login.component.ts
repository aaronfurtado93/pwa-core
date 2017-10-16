import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService } from '../../common-services/api-management/api/login/login.service';
import {ApiManagementService} from '../../common-services/api-management/api-management.service';
import {FormManagementService} from '../../common-services/form-management/form-management.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  revealPassword: boolean;

  loginForm: FormGroup;

  constructor(
    private apiManagementService: ApiManagementService,
    private formManagementService: FormManagementService
  ) {
    this.loginForm = this.formManagementService.createForm(`login`);
  }

  ngOnInit() {
  }

  submit() {
    this.apiManagementService.login(this.loginForm.value);
  }

}
