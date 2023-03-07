import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class CorreoService {

    constructor(private http: HttpClient) { }

    enviarCorreo(params:any) {
        let url = `${environment.URL_API}email/correo.php`;
        return this.http.post(url, params);
    }
}