import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppStateManagementModule } from './app-state-management/app-state-management.module';
import { ApiManagementModule } from './api-management/api-management.module';

@NgModule({
  imports: [
    CommonModule,
    AppStateManagementModule,
    ApiManagementModule
  ],
  declarations: [],
  exports: [
    AppStateManagementModule,
    ApiManagementModule
  ]
})
export class CommonServicesModule { }
