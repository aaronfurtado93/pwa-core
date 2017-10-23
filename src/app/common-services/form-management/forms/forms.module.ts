import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import {RegisterModule} from './register/register.module';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    RegisterModule
  ],
  declarations: [],
  providers: [
    LoginModule,
    RegisterModule
  ]
})
export class FormsModule { }
