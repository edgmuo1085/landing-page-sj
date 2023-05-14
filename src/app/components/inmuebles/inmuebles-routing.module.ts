import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InmueblesComponent } from "./inmuebles.component";

import { VentaComponent } from "./venta/venta.component";
import { ArriendoComponent } from "./arriendo/arriendo.component";

const routes: Routes = [
    {
      path: '',
      component: InmueblesComponent,
      children: [
        { path: '', component: InmueblesComponent },
        { path: 'arriendo', component: ArriendoComponent },
         { path: 'venta', component: VentaComponent },
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)]
  })
  export class InmueblesRoutingModule {}