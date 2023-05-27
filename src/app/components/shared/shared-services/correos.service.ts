import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CorreoService {
  constructor(private http: HttpClient) {}
  enviarCorreoSolicitud(params: FormData): Observable<any> {
    let url = `${environment.URL_CORREO}email/correoSolicitud.php`;
  
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
  
    return this.http.post(url, params, { headers });
  }
  enviarCorreo(params: string): Observable<any> {
    let url = `${environment.URL_CORREO}email/correoSolicitud.php`;
    return this.http.post(url, params);
  }
  enviarCorreoInteresado(params: string): Observable<any> {
    let url = `${environment.URL_CORREO}email/correoInteresado.php`;
    return this.http.post(url, params);
  }
}
