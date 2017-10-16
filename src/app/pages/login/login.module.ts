import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialsModule } from '../../materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonServicesModule } from '../../common-services/common-services.module';

@NgModule({
  imports: [
    CommonModule,
    CommonServicesModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
