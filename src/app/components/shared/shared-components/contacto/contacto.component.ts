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

  constructor(private fb: FormBuilder, private toastService: ToastCustomService, private correoService: CorreoService) { }

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
      let nombre = this.formContact.value.nombre;
      let cedula =this.formContact.value.cedula;
      let telefono = this.formContact.value.telefono;
      let correo = this.formContact.value.email;
      let texto = this.formContact.value.descripcion;
      let params  = { nombre: nombre ,cedula:cedula,telefono:telefono,correo:correo,texto:texto};
      let json = JSON.stringify(params);
      this.correoService.enviarCorreo(json).subscribe((response)=>{
        console.log(response);
        this.formContact.reset();
      });
      this.formContact.reset();
    }, 2500);
  }

  get formCtrlC() {
    return this.formContact.controls;
  }
}
