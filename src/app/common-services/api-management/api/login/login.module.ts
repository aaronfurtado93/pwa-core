import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import { AppStateManagementModule } from '../../../app-state-management/app-state-management.module';

@NgModule({
  imports: [
    CommonModule,
    AppStateManagementModule
  ],
  declarations: [],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
