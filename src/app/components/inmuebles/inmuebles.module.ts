import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InmueblesRoutingModule } from './inmuebles-routing.module';
import { InmueblesComponent } from './inmuebles.component';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { SharedPrimengModulesModule } from '../shared/shared-primeng-modules/shared-primeng-modules.module';
import { InmuebleVentaComponent } from './page/venta/inmueble-venta.component';
import { InmuebleArriendoComponent } from './page/arriendo/inmueble-arriendo.component';
import { LayoutComponent } from './shared-components/layout/layout.component';
import { InmuebleListaComponent } from './page/lista/inmueble-lista.component';
import { InmuebleMenuComponent } from './shared-components/menu/inmueble-menu.component';
import { InmuebleTableComponent } from './page/lista/components/table/inmueble-table.component';
import { InmuebleRegistrarComponent } from './page/registrar/inmueble-registrar.component';
import { InmuebleFormComponent } from './page/registrar/components/form/inmueble-form.component';
import { InmuebleSubirArchivosComponent } from './shared-components/subir-archivos/inmueble-subir-archivos.component';
import { InmuebleDetalleComponent } from './page/detalle/inmueble-detalle.component';
import { InmueblesFotosUpdateComponent } from './page/lista/components/lista-fotos/inmuebles-fotos-update.component';
import { InmueblesFiltrosComponent } from './shared-components/filtros/inmuebles-filtros.component';
import { InmueblePropiedadItemComponent } from './shared-components/item-propiedad/inmueble-propiedad-item.component';
import { HomeInmueblesComponent } from './shared-components/home-inmuebles/home-inmuebles.component';
import { GaleriaInmuebleComponent } from './shared-components/galeria/galeria-inmueble.component';
import { ModalInmuebleComponent } from './shared-components/modal-inmueble/modal-inmueble.component';
import { NavbarInmueblesComponent } from './shared-components/navbar-inmuebles/navbar-inmuebles.component';
import { FormDetalleComponent } from './page/detalle/components/form/form-detalle.component';

@NgModule({
  declarations: [
    InmueblesComponent,
    InmuebleVentaComponent,
    InmuebleArriendoComponent,
    LayoutComponent,
    InmuebleListaComponent,
    InmuebleMenuComponent,
    InmuebleTableComponent,
    InmuebleRegistrarComponent,
    InmuebleFormComponent,
    InmuebleSubirArchivosComponent,
    InmuebleDetalleComponent,
    InmueblesFotosUpdateComponent,
    InmueblesFiltrosComponent,
    InmueblePropiedadItemComponent,
    HomeInmueblesComponent,
    GaleriaInmuebleComponent,
    ModalInmuebleComponent,
    NavbarInmueblesComponent,
    FormDetalleComponent,
  ],
  imports: [CommonModule, InmueblesRoutingModule, ReactiveFormsModule, FormsModule, SharedComponentsModule, SharedPrimengModulesModule],
})
export class InmueblesModule {}
