import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastCustomService } from '../../shared-services/toast-custom.service';


@Component({
  selector: 'app-sj-form-inscripcion',
  templateUrl: './sj-form-inscripcion.component.html',
  styleUrls: ['./sj-form-inscripcion.component.scss'],
})
export class SjFormInscripcionComponent {
  @Input() linkPago: string = '';
  @Output() closeDialogModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor(private toastService: ToastCustomService) {

  }

  cerrarModalDialog() {
    this.closeDialogModal.emit(false);
  }
  urlPago() {
    console.log('entra' , this.linkPago);
    if(this.linkPago === '#'){
      this.toastService.showToast('Pago', 'Enlace de pago en construcción.','warn', 3000);
      return;
    }
    window.open(this.linkPago);
  }
}
