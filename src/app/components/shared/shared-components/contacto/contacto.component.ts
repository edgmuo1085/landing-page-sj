import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastCustomService } from '../../shared-services/toast-custom.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  formContact: FormGroup = new FormGroup({});
  loading: boolean = false;

  constructor(private fb: FormBuilder, private toastService: ToastCustomService) { }

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
    setTimeout(() => {
      this.toastService.showToastCustom('Contácto', 'Mensaje enviado correctamente');
      this.loading = false;
      window.open(`mailto:notificacion@sjasociadossas.com?subject=Se solicita mas información sobre lo expuesta en la pagina&body=Nombre%3A${this.formContact.value.nombre}%0ACedula%3A${this.formContact.value.cedula}%0ATelefono%3A${this.formContact.value.telefono}%0ACorreo%3A${this.formContact.value.correo}%0ADescripción%3A${this.formContact.value.descripcion}`, `_blank`);
      this.formContact.reset();
    }, 2500);
  }

  get formCtrlC() {
    return this.formContact.controls;
  }
}
