import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponentsModule } from './components/shared/shared-components/shared-components.module';
import { SharedPrimengModulesModule } from './components/shared/shared-primeng-modules/shared-primeng-modules.module';
import { InmueblesRoutingModule } from './components/inmuebles/inmuebles-routing.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, InmueblesRoutingModule,HttpClientModule, SharedComponentsModule, SharedPrimengModulesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
