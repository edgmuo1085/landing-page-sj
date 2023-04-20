import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sjservicios-modal',
  templateUrl: './sj-modal-servicios.component.html',
  styleUrls: ['./sj-modal-servicios.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SjModalServiciosComponent {
  @Input() visible: boolean = false;
  @Output() eventCloseDialogModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  _eventCloseDialogModal() {
    this.eventCloseDialogModal.emit(false);
  }

  cerrarModal(event: any) {
    this.visible = event;
  }
}
