import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmueblesRoutingModule } from './inmuebles-routing.module';

import { InmueblesComponent } from './inmuebles.component';

import { VentaComponent } from './venta/venta.component';
import { ArriendoComponent } from './arriendo/arriendo.component';
import { InmueblesFotosUpdateComponent } from './lista/components/lista-fotos/inmuebles-fotos-update.component';

import { InmuebleListaComponent } from './lista/inmueble-lista.component';
import { InmuebleFormComponent } from './registrar/components/form/inmueble-form.component';
import { InmuebleRegistrarComponent } from './registrar/inmueble-registrar.component';
import { InmueblesFiltrosComponent } from './shared/filtros/inmuebles-filtros.component';
import { InmueblePropiedadItemComponent } from './shared/item-propiedad/inmueble-propiedad-item.component';
import { InmuebleMenuComponent } from './shared/menu/inmueble-menu.component';
import { ModalInmuebleComponent } from './shared/modal/modal-inmueble.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModulesModule } from '../shared/shared-modules/shared-modules.module';
import { InmuebleTableComponent } from './lista/components/table/inmueble-table.component';
import { GaleriaInmuebleComponent } from './shared/galeria/galeria-inmueble.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SharedPrimengModulesModule } from '../shared/shared-primeng-modules/shared-primeng-modules.module';
import { HomeServiciosComponent } from './shared/cards/home-servicios.component';
import { InmuebleSubirArchivosComponent } from './shared/subir-archivos/inmueble-subir-archivos.component';
import { InmuebleDetalleComponent } from './detalle/inmueble-detalle.component';
import { LayoutAuthComponent } from './shared/layout-auth/layout-auth.component';

@NgModule({
  declarations: [
    InmueblesComponent,
    ArriendoComponent,
    VentaComponent,
    InmuebleRegistrarComponent,
    InmuebleListaComponent,
    InmuebleMenuComponent,
    InmuebleTableComponent,
    InmuebleFormComponent,
    InmueblesFotosUpdateComponent,
    InmueblesFiltrosComponent,
    InmueblePropiedadItemComponent,
    ModalInmuebleComponent,
    NavbarComponent,
    HomeServiciosComponent,
    LayoutAuthComponent,
    GaleriaInmuebleComponent,
    InmuebleSubirArchivosComponent,
    InmuebleDetalleComponent,
  ],
  imports: [CommonModule, InmueblesRoutingModule, ReactiveFormsModule, SharedModulesModule, SharedPrimengModulesModule, FormsModule],
  exports: [NavbarComponent],
})
export class InmueblesModule {}
