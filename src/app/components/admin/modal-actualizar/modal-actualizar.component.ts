import { RolesService } from '../../shared/shared-services/roles.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-actualizar',
  templateUrl: './modal-actualizar.component.html',
  styleUrls: ['./modal-actualizar.component.scss'],
})
export class ModalActualizarComponent implements OnInit {
  formActualizar!: FormGroup;

  rol: any[] = [];

  constructor(private fb: FormBuilder, private roll: RolesService) {}

  ngOnInit(): void {
    this.formActualizar = this.fb.group({
      nombre: ['', Validators.required],
      usuario: ['', Validators.required],
      cedula: ['', Validators.required],
      contrasena: ['', Validators.required],
      correo: ['', Validators.required],
      rol: ['', Validators.required],
    });
  }

  obtenerRoles() {
    this.roll.obtenerLista().subscribe(rest => {
      rest.forEach((element: any) => {
        this.rol.push(element);
      });
      console.log(this.rol);
    });
  }

  actualizar() {
    console.log(this.formActualizar);
  }
}
