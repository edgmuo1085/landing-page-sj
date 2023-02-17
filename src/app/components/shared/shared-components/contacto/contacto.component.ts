import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements OnInit {
  formContact: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formContact = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      cedula: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }
  enviar() {
    console.log(this.formContact);
  }
}
