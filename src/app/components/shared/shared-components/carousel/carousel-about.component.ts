import { Component, Input } from '@angular/core';
import { ImgCarousel } from 'src/app/components/models/images-carousel.interface';

@Component({
  selector: 'app-carousel-about',
  templateUrl: './carousel-about.component.html',
  styleUrls: ['./carousel-about.component.scss'],
})
export class CarouselAboutComponent {
  responsiveOptions: any[] = [];
  @Input() carouselArray: ImgCarousel[] = [];

  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
