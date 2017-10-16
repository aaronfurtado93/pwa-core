import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { CommonServicesModule } from '../common-services/common-services.module';

@NgModule({
  imports: [
    CommonModule,
    CommonComponentsModule,
    CommonServicesModule,
    PagesRoutingModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
