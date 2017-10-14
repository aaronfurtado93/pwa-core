import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  declarations: [],
  exports: [
    HeaderModule,
    FooterModule
  ]
})
export class CommonComponentsModule { }
