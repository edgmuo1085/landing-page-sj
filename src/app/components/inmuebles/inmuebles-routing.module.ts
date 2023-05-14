import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InmueblesComponent } from "./inmuebles.component";

import { VentaComponent } from "./venta/venta.component";
import { ArriendoComponent } from "./arriendo/arriendo.component";
import { LayoutAuthComponent } from "./shared/layout-auth/layout-auth.component";
import { InmuebleRegistrarComponent } from "./registrar/inmueble-registrar.component";
import { InmuebleDetalleComponent } from "./detalle/inmueble-detalle.component";
import { InmuebleListaComponent } from "./lista/inmueble-lista.component";

const routes: Routes = [
    {
      path: '',
      component: LayoutAuthComponent,
      children: [
      { path: '', component: InmueblesComponent },
      { path: 'registrar', component: InmuebleRegistrarComponent },
      { path: 'arriendo', component: ArriendoComponent },
      { path: 'venta', component: VentaComponent },
      {
        path: 'detalle/:inmueble',
        component: InmuebleDetalleComponent,
      },
      {
        path: 'listar',
        component: InmuebleListaComponent,
      },
      {
        path: 'registrar',
        component: InmuebleRegistrarComponent,
      },
      {
        path: 'actualizar/:idInmueble',
        component: InmuebleRegistrarComponent,
      },
      { path: '**', component: InmueblesComponent },
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)]
  })
  export class InmueblesRoutingModule {}