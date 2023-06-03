import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Router } from '@angular/router';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { DepartamentoService } from 'src/app/components/shared/shared-services/departametos.service';
import { departamento } from 'src/app/components/interfaces/departamento.interfaces';

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
  @Input() ciudades: String[] = [];
  @Input() listaDepartamentos: ParametrosShared[]= [];
  @Input() listaEleccionSiNo: ParametrosShared[] = [];
  @Input() estadoInmueble: ParametrosShared[] = [];
  @Input() tipoPublicacion: ParametrosShared[] = [];
  @Input() tipoConstruccion: ParametrosShared[] = [];
  @Output() actionFormInmueble: EventEmitter<any> = new EventEmitter<any>();
  departamentoSeleccionado:string='';
  constructor(private router: Router,private depar: DepartamentoService) {}
  
  onChangeDepartamento(event: any) {
    this.departamentoSeleccionado = event.target.value;
    this.depart(this.departamentoSeleccionado);
  }
  depart(nombre: string) {
    this.depar.depar(nombre).subscribe((response: string[]) => {
      this.ciudades=response;
    });
  }
  onSubmitFormInmueble() {
    this.actionFormInmueble.emit();
  }

  btnCancel() {
  
      this.router.navigate(['/inmuebles/lista']);
    this.formRegistroInmueble.reset();
  }
}
