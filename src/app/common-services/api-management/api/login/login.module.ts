import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import { AppStateManagementModule } from '../../../app-state-management/app-state-management.module';
import { FirebaseResponseHandlerModule } from '../../../firebase-response-handler/firebase-response-handler.module';

@NgModule({
  imports: [
    CommonModule,
    FirebaseResponseHandlerModule,
    AppStateManagementModule
  ],
  declarations: [],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
