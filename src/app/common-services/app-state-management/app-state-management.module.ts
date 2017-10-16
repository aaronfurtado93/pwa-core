import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LocalStorageService } from './local-storage/local-storage.service';
import { AppStateManagementService } from './app-state-management.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    LocalStorageService,
    AppStateManagementService
  ]
})
export class AppStateManagementModule { }
