import { BotonesComponent } from './botones/botones.component';
import { RegistroComponent } from './registro/registro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: RegistroComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'botones', component: BotonesComponent },
      { path: '**', component: RegistroComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
