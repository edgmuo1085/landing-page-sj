import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios/servicios.component';
import { CoPropiedadesComponent } from './co-propiedades/co-propiedades.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ValoresComponent } from './valores/valores.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselAboutComponent } from './carousel/carousel-about.component';
import { SharedPrimeNgModule } from '../shared-primeng-modules/shared-primeng.module';

@NgModule({
  declarations: [
    ServiciosComponent,
    CoPropiedadesComponent,
    AcercaDeComponent,
    ValoresComponent,
    ContactoComponent,
    NavbarComponent,
    CarouselAboutComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, SharedPrimeNgModule],
  exports: [
    ServiciosComponent,
    CoPropiedadesComponent,
    AcercaDeComponent,
    ValoresComponent,
    ContactoComponent,
    NavbarComponent,
    CarouselAboutComponent,
  ],
})
export class SharedComponentsModule {}
