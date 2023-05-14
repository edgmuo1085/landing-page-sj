import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InmueblesComponent } from "./inmuebles.component";

import { VentaComponent } from "./venta/venta.component";
import { ArriendoComponent } from "./arriendo/arriendo.component";
import { LayoutAuthComponent } from "./shared/layout-auth/layout-auth.component";

const routes: Routes = [
    {
      path: '',
      component: LayoutAuthComponent,
      children: [
      { path: '', component: InmueblesComponent },
      { path: 'arriendo', component: ArriendoComponent },
      { path: 'venta', component: VentaComponent },
      { path: '**', component: InmueblesComponent },
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)]
  })
  export class InmueblesRoutingModule {}