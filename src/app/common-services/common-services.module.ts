import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppStateManagementModule } from './app-state-management/app-state-management.module';
import { ApiManagementModule } from './api-management/api-management.module';
import {FormManagementModule} from './form-management/form-management.module';

@NgModule({
  imports: [
    CommonModule,
    FormManagementModule,
    AppStateManagementModule,
    ApiManagementModule
  ],
  declarations: [],
  exports: [
    FormManagementModule,
    AppStateManagementModule,
    ApiManagementModule
  ]
})
export class CommonServicesModule { }
