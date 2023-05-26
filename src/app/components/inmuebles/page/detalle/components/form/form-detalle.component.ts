import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponseInmueble } from 'src/app/components/interfaces/response-inmueble.interface';
import { CorreoService } from 'src/app/components/shared/shared-services/correos.service';
import { ToastCustomService } from 'src/app/components/shared/shared-services/toast-custom.service';

@Component({
  selector: 'app-form-detalle',
  templateUrl: './form-detalle.component.html',
  styleUrls: ['./form-detalle.component.scss'],
})
export class FormDetalleComponent implements OnChanges {
  @Input() botonVenta: boolean = false;
  @Input() botonArriendo: boolean = false;
  @Input() infoInmueble: ResponseInmueble = {} as ResponseInmueble;
  loading: boolean = false;
  formInteresado: FormGroup = new FormGroup({});
  @Output() actionCloseModal :EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder,private toastService: ToastCustomService, private correoService: CorreoService) {
    this.formInteresado = this.fb.group({
      nombre: ['', [Validators.required]],
      cedula: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      descripcion: ['', [Validators.required]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {

      if (this.botonVenta) {
        this.formInteresado.patchValue({
          descripcion: 'Estoy interesado en comprar esta propiedad',
        });
        return;
      }
      if (this.botonArriendo) {
        this.formInteresado.patchValue({
          descripcion: 'Estoy interesado en arrendar esta propiedad',
        });
      }
  }

  get formCtrlC() {
    return this.formInteresado.controls;
  }

  enviar() {
    if (this.formInteresado.invalid) {
      this.toastService.showToast('Servicio inmobiliario le informa', 'Debe llenar todos los datos.', 'error');
      return;
    }
    this.loading = true;
    let params = {
      nombre: this.formInteresado.value.nombre,
      cedula: this.formInteresado.value.cedula,
      telefono: this.formInteresado.value.telefono,
      correo: this.formInteresado.value.email,
      texto: this.formInteresado.value.descripcion,
      direccionInmueble:this.infoInmueble.direccion,
      precioInmueble:this.infoInmueble.precio,
      tipoInmueble:this.infoInmueble.tipoInmueble,
      numeroApartamento:this.infoInmueble.numeroApartamento,
      copropiedadInmueble:this.infoInmueble.copropiedad
    };

    const json = JSON.stringify(params);
    this.correoService.enviarCorreoInteresado(json).subscribe({
      next: response => {
        this.toastService.showToast('Servicio inmobiliario le informa', 'Su mensaje fue enviado correctamente');
        this.loading = false;
        this.formInteresado.reset();
        this.actionCloseModal.emit(false);
      },
      error: err => {
        console.error(err);
        this.loading = false;
      },
    });
  }
}
