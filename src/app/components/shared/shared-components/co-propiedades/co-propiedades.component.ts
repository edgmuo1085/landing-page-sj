import { Component } from '@angular/core';
import { ImgCarousel } from 'src/app/components/models/images-carousel.interface';
import { UsuarioService } from '../../shared-services/usuario.service';

@Component({
  selector: 'app-co-propiedades',
  templateUrl: './co-propiedades.component.html',
  styleUrls: ['./co-propiedades.component.scss'],
})
export class CoPropiedadesComponent {
  carouselArray: ImgCarousel[] = [];

  constructor(private usuarioService: UsuarioService) {
    this.getFotosCarousel();
  }

  getFotosCarousel() {
    this.usuarioService.getPhotosCarousel().subscribe({
      next: response => {
        this.carouselArray = response;
      },
    });
  }
}
