import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModule } from './auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    AuthModule
  ],
  declarations: [],
  exports: [
    AuthModule
  ]
})
export class GuardsModule { }
