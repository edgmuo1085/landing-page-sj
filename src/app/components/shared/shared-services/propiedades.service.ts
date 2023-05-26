import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArchivoInmuebleModel, ArchivoInmuebleUpModel, DocumentoUpModel } from '../../interfaces/archivo-inmueble.interface';
import { InmuebleModel, InmuebleRegistroModel } from '../../interfaces/inmueble.interface';
import { ResponseInmueble } from '../../interfaces/response-inmueble.interface';
import { ResponseArchivo } from '../../interfaces/respose-archivo.interface';

@Injectable({
  providedIn: 'root',
})
export class PropiedadesService {
  constructor(private http: HttpClient) {}

  getInmuebles(): Observable<ResponseInmueble[]> {
    const url = `${environment.URL_API}predio/lista`;
    return this.http.get<ResponseInmueble[]>(url);
  }

  getInmueblesUsuario(idUsuario: number): Observable<ResponseInmueble[]> {
    const url = `${environment.URL_API}predio/listausuario/${idUsuario}`;
    return this.http.get<ResponseInmueble[]>(url);
  }

  getInmuebleOne(id: number): Observable<ResponseInmueble> {
    const url = `${environment.URL_API}predio/buscar/${id}`;
    //return this.http.get<ResponseArchivo[]>('./assets/data/imagenes.json');
    return this.http.get<ResponseInmueble>(url);
  }

  getPropiedadesDestacados(): Observable<ResponseInmueble[]> {
    const url = `${environment.URL_API}predio/ultimos`;
    //return this.http.get<ResponseInmueble[]>('./assets/data/destacados.json');
    return this.http.get<ResponseInmueble[]>(url);
  }

  getArchivosUrlImg(nombre: string): string {
    return `${environment.URL_API}archivos/getImg/${nombre}`;
  }

  crearInmueble(inmueble: InmuebleRegistroModel): Observable<any> {
    const url = `${environment.URL_API}predio/crear`;
    return this.http.post<any>(url, inmueble);
  }

  actualizarInmueble(inmueble: InmuebleModel): Observable<any> {
    const url = `${environment.URL_API}predio/crear`;
    return this.http.post<any>(url, inmueble);
  }

  guardarFoto(data: ArchivoInmuebleModel): Observable<ResponseArchivo> {
    const url = `${environment.URL_API}archivos/insertar/`;
    return this.http.post<ResponseArchivo>(url, data);
  }

  guardarDocumento(data: DocumentoUpModel): Observable<ResponseArchivo> {
    const url = `${environment.URL_API}archivos/insertar/`;
    return this.http.post<ResponseArchivo>(url, data);
  }

  getUploadPhotoHosting(formData: FormData): Observable<HttpEvent<void>> {
    const url = `https://sjasociadossas.com/up_imagen/form-sj.php`;
    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);
  }

  actualizarArchivoAdjunto(data: ArchivoInmuebleUpModel): Observable<ResponseArchivo> {
    const url = `${environment.URL_API}archivos/insertar/`;
    return this.http.post<ResponseArchivo>(url, data);
  }

  getPropiedadesTodas() {
    const url = `${environment.URL_API}predio/lista`;
    return this.http.get(url);
  }

  getPropiedadesFiltro(filtro: string): Observable<ResponseInmueble[]> {
    const url = `${environment.URL_API}predio/filtros/${filtro}`;
    return this.http.get<ResponseInmueble[]>(url);
  }
}
