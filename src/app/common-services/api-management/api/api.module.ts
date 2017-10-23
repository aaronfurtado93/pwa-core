import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './login/login.module';
import { LogoutModule } from './logout/logout.module';
import { RegisterModule } from './register/register.module';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    LogoutModule,
    RegisterModule
  ],
  declarations: [],
  exports: [
    LoginModule,
    LogoutModule,
    RegisterModule
  ]
})
export class ApiModule { }
