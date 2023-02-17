import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { SharedPrimeNgModule } from '../shared/shared-primeng-modules/shared-primeng.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule, FormsModule, SharedComponentsModule, SharedPrimeNgModule],
})
export class HomeModule {}
