import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from './forms/forms.module';
import {FormManagementService} from './form-management.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  exports: [
    FormsModule
  ],
  providers: [
    FormManagementService
  ]
})
export class FormManagementModule { }
