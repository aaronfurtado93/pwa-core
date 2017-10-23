import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiManagementService } from '../../common-services/api-management/api-management.service';
import { FormManagementService } from '../../common-services/form-management/form-management.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  revealPassword: boolean;
  revealConfirmPassword: boolean;

  registerForm: FormGroup;

  constructor(
    private apiManagementService: ApiManagementService,
    private formManagementService: FormManagementService
  ) {
    this.registerForm = this.formManagementService.createForm(`register`);
  }

  ngOnInit() {
  }

  checkPasswordConfirmPassword() {
    return this.registerForm.get(`password`).value === this.registerForm.get(`confirmPassword`).value;
  }

  submit() {
    this.apiManagementService.register(this.registerForm.value);
  }
}
