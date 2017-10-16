import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppStateManagementModule } from './app-state-management/app-state-management.module';

@NgModule({
  imports: [
    CommonModule,
    AppStateManagementModule
  ],
  declarations: [],
  exports: [
    AppStateManagementModule
  ]
})
export class CommonServicesModule { }
