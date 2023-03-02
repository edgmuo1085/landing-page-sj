import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sj-form-inscripcion',
  templateUrl: './sj-form-inscripcion.component.html',
  styleUrls: ['./sj-form-inscripcion.component.scss'],
})
export class SjFormInscripcionComponent {
  @Output() closeDialogModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  cerrarModalDialog() {
    this.closeDialogModal.emit(false);
  }
}
