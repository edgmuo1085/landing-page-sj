import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImgCarousel } from '../../models/images-carousel.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  urlImg: string = './assets/i';

  constructor(private http: HttpClient) {}

  obtenerLista() {
    return this.http.get<any>(`${environment.URL_API}/usuario/lista`).pipe();
  }

  getPhotosCarousel(): Observable<ImgCarousel[]> {
    return this.http.get<ImgCarousel[]>('./assets/data/carousel.json');
  }
}
