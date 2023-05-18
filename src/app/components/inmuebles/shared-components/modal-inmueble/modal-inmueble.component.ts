import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-inmueble',
  templateUrl: './modal-inmueble.component.html',
  styleUrls: ['./modal-inmueble.component.scss'],
})
export class ModalInmuebleComponent {
  @Input() visible: boolean = false;
  @Output() eventCloseDialogModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  _eventCloseDialogModal() {
    this.eventCloseDialogModal.emit(false);
  }
}
