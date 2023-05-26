import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorreoService {
  constructor(private http: HttpClient) {}

  enviarCorreo(params: string): Observable<any> {
    let url = `${environment.URL_CORREO}email/correo.php`;
    return this.http.post(url, params);
  }
  enviarCorreoInteresado(params: string): Observable<any> {
    let url = `${environment.URL_CORREO}email/correoInteresado.php`;
    return this.http.post(url, params);
  }
}
