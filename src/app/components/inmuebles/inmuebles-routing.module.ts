import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InmueblesComponent } from './inmuebles.component';
import { InmuebleVentaComponent } from './page/venta/inmueble-venta.component';
import { InmuebleArriendoComponent } from './page/arriendo/inmueble-arriendo.component';
import { LayoutComponent } from './shared-components/layout/layout.component';
import { InmuebleListaComponent } from './page/lista/inmueble-lista.component';
import { InmuebleRegistrarComponent } from './page/registrar/inmueble-registrar.component';
import { InmuebleDetalleComponent } from './page/detalle/inmueble-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: InmueblesComponent,
      },
      {
        path: 'lista',
        component: InmuebleListaComponent,
      },
      {
        path: 'venta',
        component: InmuebleVentaComponent,
      },
      {
        path: 'arriendo',
        component: InmuebleArriendoComponent,
      },
      {
        path: 'detalle/:inmueble',
        component: InmuebleDetalleComponent,
      },
      {
        path: 'registrar',
        component: InmuebleRegistrarComponent,
      },
      {
        path: 'actualizar/:idInmueble',
        component: InmuebleRegistrarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InmueblesRoutingModule {}
