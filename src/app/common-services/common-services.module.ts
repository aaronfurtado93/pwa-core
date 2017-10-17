import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppStateManagementModule } from './app-state-management/app-state-management.module';
import { ApiManagementModule } from './api-management/api-management.module';
import { FormManagementModule } from './form-management/form-management.module';
import { FirebaseResponseHandlerService } from './firebase-response-handler/firebase-response-handler.service';
import {FirebaseResponseHandlerModule} from './firebase-response-handler/firebase-response-handler.module';

@NgModule({
  imports: [
    CommonModule,
    FormManagementModule,
    AppStateManagementModule,
    FirebaseResponseHandlerModule,
    ApiManagementModule
  ],
  declarations: [],
  exports: [
    FormManagementModule,
    AppStateManagementModule,
    FirebaseResponseHandlerModule,
    ApiManagementModule
  ]
})
export class CommonServicesModule { }
