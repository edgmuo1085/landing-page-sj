import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RolesService } from '../../shared/shared-services/roles.service';
import { UsuarioService } from '../../shared/shared-services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  usuarios: any[] = [];
  formUsuario!: FormGroup;
  roles: any[] = ['Admin', 'User', 'Sopor'];
  rol: any[] = [];
  constructor(private user: UsuarioService, private fb: FormBuilder, private router: Router, private roll: RolesService) {}

  ngOnInit(): void {
    this.formUsuario = this.fb.group({
      nombre: ['', Validators.required],
      usuario: ['', Validators.required],
      cedula: ['', Validators.required],
      contrasena: ['', Validators.required],
      correo: ['', Validators.required],
      rol: ['', Validators.required],
    });
    this.usuario();
    this.obtenerRoles();
  }
  usuario() {
    this.user.obtenerLista().subscribe(rest => {
      rest.forEach((element: any) => {
        this.usuarios.push(element);
      });
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
}
