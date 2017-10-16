import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutService } from './logout.service';
import { AppStateManagementModule } from '../../../app-state-management/app-state-management.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    LogoutService,
    AppStateManagementModule
  ]
})
export class LogoutModule { }
