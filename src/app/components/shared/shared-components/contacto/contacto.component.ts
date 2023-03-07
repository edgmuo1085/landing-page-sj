import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CorreoService } from '../../shared-services/correos.service';
import { ToastCustomService } from '../../shared-services/toast-custom.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  formContact: FormGroup = new FormGroup({});
  loading: boolean = false;

  constructor(private fb: FormBuilder, private toastService: ToastCustomService, private correoService: CorreoService) {}

  ngOnInit(): void {
    this.formContact = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      cedula: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  enviar() {
    if (this.formContact.invalid) {
      this.toastService.showToastCustom('Contácto', 'Debe llenar todos los datos.', 'error');
      return;
    }
    this.loading = true;
    let params = {
      nombre: this.formContact.value.nombre,
      cedula: this.formContact.value.cedula,
      telefono: this.formContact.value.telefono,
      correo: this.formContact.value.email,
      texto: this.formContact.value.descripcion,
    };

    const json = JSON.stringify(params);
    this.correoService.enviarCorreo(json).subscribe({
      next: response => {
        this.toastService.showToastCustom('Contácto', 'Mensaje enviado correctamente');
        this.loading = false;
        this.formContact.reset();
      },
      error: err => {
        console.error(err);
        this.loading = false;
      },
    });
  }

  get formCtrlC() {
    return this.formContact.controls;
  }
}
