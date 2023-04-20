import { Component } from '@angular/core';
import { SjModalServiciosComponent } from '../sj-modal-servicios/sj-modal-servicios.component';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {
  visible: boolean = false;
  responsiveOptions: any[] = [];
  categoria:string='';
  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  abrirModal(variable: string) {
    this.categoria=variable;
    this.visible = true;
  }

  closeModal(event: any) {
    this.visible = event;
  }
}