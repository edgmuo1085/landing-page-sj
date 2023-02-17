import { HttpClient } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

export class SjasoContextSetting {
  static language() {
    return (http: HttpClient) => {
      return new MultiTranslateHttpLoader(http, [{ prefix: './assets/i18n/', suffix: '.json' }]);
    };
  }
}
