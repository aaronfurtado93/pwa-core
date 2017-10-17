import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';
import { CommonComponentsModule } from './common-components/common-components.module';
import { CommonServicesModule } from './common-services/common-services.module';
import { GuardsModule } from './guards/guards.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MaterialsModule,
    CommonComponentsModule,
    CommonServicesModule,
    AppRoutingModule,
    GuardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
