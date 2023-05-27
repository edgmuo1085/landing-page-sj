import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CorreoService } from '../../shared-services/correos.service';
import { ToastCustomService } from '../../shared-services/toast-custom.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  @ViewChild('archivoInput') archivoInputRef!: ElementRef<HTMLInputElement>;
  nombreArchivo: string = '';
  formContact: FormGroup = new FormGroup({});
  loading: boolean = false;
  constructor(private fb: FormBuilder, private toastService: ToastCustomService, private correoService: CorreoService) {}

  ngOnInit(): void {
    this.formContact = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      cedula: ['', Validators.required],
      archivo: [null],
    });
  }
  enviar() {
    if (this.formContact.invalid) {
      this.toastService.showToast('Contácto', 'Debe llenar todos los datos.', 'error');
      return;
    }
    let formData = new FormData();
    this.loading = true;
    const archivoInput = this.archivoInputRef.nativeElement;
    const archivos: FileList | null = archivoInput.files;
    if (archivos && archivos.length > 0) {
      const archivo: File = archivos[0];
      this.nombreArchivo = archivo.name;
      formData.append('archivo', archivo);
    }
    let nombre: string = this.formContact.value.nombre;
    let cedula: string = this.formContact.value.cedula;
    let telefono: string = this.formContact.value.telefono;
    let correo: string = this.formContact.value.email;
    formData.append('nombre', nombre);
    formData.append('cedula', cedula);
    formData.append('telefono', telefono);
    formData.append('correo', correo);
    formData.append('nombreArc', this.nombreArchivo);
   this.correoService.enviarCorreoSolicitud(formData).subscribe({
      next: response => {
        this.toastService.showToast('Contácto', 'Mensaje enviado correctamente');
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
