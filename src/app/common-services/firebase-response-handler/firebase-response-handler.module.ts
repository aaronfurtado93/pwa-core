import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseResponseHandlerService } from './firebase-response-handler.service';
import { MaterialSnackBarModule } from '../material-snack-bar/material-snack-bar.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialSnackBarModule
  ],
  declarations: [],
  providers: [
    FirebaseResponseHandlerService
  ]
})
export class FirebaseResponseHandlerModule { }
