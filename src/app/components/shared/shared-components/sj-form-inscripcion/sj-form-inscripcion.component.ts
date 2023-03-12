import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastCustomService } from '../../shared-services/toast-custom.service';

@Component({
  selector: 'app-sj-form-inscripcion',
  templateUrl: './sj-form-inscripcion.component.html',
  styleUrls: ['./sj-form-inscripcion.component.scss'],
})
export class SjFormInscripcionComponent {
  @Output() closeDialogModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  formRegister: FormGroup = new FormGroup({});
  loading: boolean = false;

  constructor(private fb: FormBuilder, private toastService: ToastCustomService) {
    this.formRegister = this.fb.group({
      referencia: ['', [Validators.required]],
      valor: ['', [Validators.required, Validators.minLength(3)]],
      fechaPago: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });
  }

  cerrarModalDialog() {
    this.closeDialogModal.emit(false);
  }

  onSubmitEnviar() {
    if (this.formRegister.invalid) {
      this.toastService.showToastCustom('Inscripción', 'Debe llenar todos los datos.', 'error');
      return;
    }

    this.loading = true;
    setTimeout(() => {
      this.toastService.showToastCustom('Inscripción', 'Inscripción realizada correctamente');
      this.loading = false;
      this.cerrarModalDialog();
      this.formRegister.reset();
    }, 2500);
  }

  get formCtrlR() {
    return this.formRegister.controls;
  }
}
