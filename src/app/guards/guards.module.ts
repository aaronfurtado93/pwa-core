import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule,
    LoginModule
  ],
  declarations: [],
  exports: [
    AuthModule,
    LoginModule
  ]
})
export class GuardsModule { }
