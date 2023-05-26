import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Router } from '@angular/router';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';

@Component({
  selector: 'app-inmueble-form',
  templateUrl: './inmueble-form.component.html',
  styleUrls: ['./inmueble-form.component.scss'],
})
export class InmuebleFormComponent {
  @Input() cargarImagenes: boolean = false;
  @Input() formRegistroInmueble: FormGroup = new FormGroup({});
  @Input() idInmueble: number = 0;
  @Input() loading: boolean = false;
  @Input() actualizarInmueble = false;
  @Input() msgTituloPage: string = '';
  @Input() tiposInmuebles: ParametrosShared[] = [];
  @Input() listaCopropiedad: ParametrosShared[] = [];
  @Input() listaHabitaciones: ParametrosShared[] = [];
  @Input() listaEstratos: ParametrosShared[] = [];
  @Input() listaBanios: ParametrosShared[] = [];
  @Input() listaEleccionSiNo: ParametrosShared[] = [];
  @Input() estadoInmueble: ParametrosShared[] = [];
  @Input() tipoPublicacion: ParametrosShared[] = [];
  @Input() tipoConstruccion: ParametrosShared[] = [];
  @Output() actionFormInmueble: EventEmitter<any> = new EventEmitter<any>();

  constructor(private router: Router) {}

  onSubmitFormInmueble() {
    this.actionFormInmueble.emit();
  }

  btnCancel() {
  
      this.router.navigate(['/inmuebles/lista']);
    this.formRegistroInmueble.reset();
  }
}
