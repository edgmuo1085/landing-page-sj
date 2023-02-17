import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  constructor(private http: HttpClient) {}

  obtenerLista() {
    return this.http.get<any>(`${environment.URL_API}/roles/lista`).pipe();
  }
}
