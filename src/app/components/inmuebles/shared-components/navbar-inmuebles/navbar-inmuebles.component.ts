import { Router } from '@angular/router';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ParametrosShared2 } from 'src/app/components/interfaces/parametros.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar-inmuebles',
  templateUrl: './navbar-inmuebles.component.html',
  styleUrls: ['./navbar-inmuebles.component.scss'],
})
export class NavbarInmueblesComponent {
  @ViewChild('notification', { static: false }) notificationRef: ElementRef;
  correo: ParametrosShared2[] = environment.correos;
  constructor(private elRef: ElementRef, private router: Router) {
    this.notificationRef = this.elRef.nativeElement.querySelector('#notification');
  }
  correoValido = false;
  solicitarCorreo() {
    const correo = prompt('Por favor, ingrese su correo:');
    if (correo) {
      const correoValido = this.correo.some(c => c.value === correo);
      if (correoValido) {
        this.correoValido = true;
        this.router.navigateByUrl('/inmuebles/lista');
      } else {
        this.correoValido = false;
        this.notificationRef.nativeElement.classList.add('show');
        setTimeout(() => {
          this.notificationRef.nativeElement.classList.remove('show');
        }, 3000);
      }
    } else {
      this.correoValido = false;
      this.notificationRef.nativeElement.classList.add('show');
      setTimeout(() => {
        this.notificationRef.nativeElement.classList.remove('show');
      }, 3000);
    }
  }
}
