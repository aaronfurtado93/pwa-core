import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { CommonServicesModule } from '../../common-services/common-services.module';
import { MaterialsModule } from '../../materials/materials.module';

@NgModule({
  imports: [
    CommonModule,
    CommonServicesModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    RegisterRoutingModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
