import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ParametrosShared } from 'src/app/components/interfaces/parametros.interface';
import { DepartamentoService } from 'src/app/components/shared/shared-services/departametos.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inmuebles-filtros',
  templateUrl: './inmuebles-filtros.component.html',
  styleUrls: ['./inmuebles-filtros.component.scss'],
})
export class InmueblesFiltrosComponent implements OnInit {
  @Output() actionFiltrosInmueble: EventEmitter<any> = new EventEmitter<any>();

  tiposInmuebles: ParametrosShared[] = environment.tiposInmuebles;
  estadosInmueble: ParametrosShared[] = environment.estadoInmueble;
  listaHabitaciones: ParametrosShared[] = environment.listaHabitaciones;
  tipoCopropiedad: ParametrosShared[] = environment.listaCopropiedad;
  listaDepartamento: ParametrosShared[] = environment.listaDepartamentos;
  tipoInmueble: string = '';
  copropiedad: string = '';
  estado: string = '';
  habitaciones: string = '';
  municipio: string = '';
  departamento: string = '';
  ciudades:string[]=[];
  constructor(private depar: DepartamentoService) {}

  ngOnInit(): void {}

  limpiarFiltros() {
    this.tipoInmueble = '';
    this.copropiedad = '';
    this.estado = '';
    this.habitaciones = '';
    this.departamento = '';
    this.actionFiltrosInmueble.emit();
  }
  onChangeDepartamento(event: any) {
    this.departamento = event.target.value;
    this.depart(this.departamento);
  }
  depart(nombre: string) {
    console.log(nombre)
    this.depar.depar(nombre).subscribe((response: string[]) => {
      this.ciudades=response;
    });
  }
  consultarFiltro(event: any) {
    if (!event.target.value) {
      return;
    }
console.log(this.copropiedad);
    let data = [
      { keyForm: 'tipoInmueble', valueForm: this.tipoInmueble },
      { keyForm: 'copropiedad', valueForm: this.copropiedad },
      { keyForm: 'estado', valueForm: this.estado },
      { keyForm: 'habitacion', valueForm: this.habitaciones },
      { keyForm: 'departamento', valueForm: this.departamento },
      { keyForm: 'municipio', valueForm: this.municipio },
    ];

    let json = {};
    data.map(item => {
      if (!item.valueForm) {
        return;
      }
      json = {
        ...json,
        ...{ [item.keyForm]: item.valueForm },
      };
    });

    this.actionFiltrosInmueble.emit(json);
  }
}
