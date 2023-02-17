import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-boton',
  templateUrl: './modal-boton.component.html',
  styleUrls: ['./modal-boton.component.scss'],
})
export class ModalBotonComponent implements OnInit {
  @Input() mensaje: any = '';

  constructor() {}

  ngOnInit(): void {}
}
