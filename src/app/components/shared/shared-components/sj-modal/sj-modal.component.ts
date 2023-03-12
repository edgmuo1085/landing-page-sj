import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sj-modal',
  templateUrl: './sj-modal.component.html',
  styleUrls: ['./sj-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SjModalComponent {
  @Input() visible: boolean = false;
  @Output() eventCloseDialogModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  _eventCloseDialogModal() {
    this.eventCloseDialogModal.emit(false);
  }

  cerrarModal(event: any) {
    this.visible = event;
  }
}
