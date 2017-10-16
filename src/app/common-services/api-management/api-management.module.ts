import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiManagementService } from './api-management.service';
import { ApiModule } from './api/api.module';

@NgModule({
  imports: [
    CommonModule,
    ApiModule
  ],
  declarations: [],
  exports: [
    ApiModule
  ],
  providers: [
    ApiManagementService
  ]
})
export class ApiManagementModule { }
