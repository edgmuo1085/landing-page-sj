import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastCustomService {
  constructor(private messageService: MessageService) {}

  showToastCustom(summary: string, detail: string, severity?: string, life?: number, key?: string) {
    let textSummary: string = summary;
    let textDetail: string = detail;
    let severityCustom = severity ? severity : 'success';
    let keyCustom = key ? key : 'toast-layout';
    let lifeCustom = life ? life : 10000;

    this.messageService.add({
      key: keyCustom,
      severity: severityCustom,
      summary: textSummary,
      detail: textDetail,
      life: lifeCustom,
    });
  }
}
