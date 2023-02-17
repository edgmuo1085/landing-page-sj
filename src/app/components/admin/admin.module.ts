import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistroComponent } from './registro/registro.component';
import { BotonesComponent } from './botones/botones.component';
import { ModalActualizarComponent } from './modal-actualizar/modal-actualizar.component';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { SharedPrimeNgModule } from '../shared/shared-primeng-modules/shared-primeng.module';

@NgModule({
  declarations: [
    DashboardComponent,
    RegistroComponent,
    BotonesComponent,
    ModalActualizarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedComponentsModule,
    SharedPrimeNgModule,
  ],
})
export class AdminModule {}
