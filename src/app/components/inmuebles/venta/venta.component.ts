import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ResponseInmueble } from '../../interfaces/response-inmueble.interface';
import { ResponseArchivo } from '../../interfaces/respose-archivo.interface';
import { PropiedadesService } from '../../shared/shared-services/propiedades.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss'],
})
export class VentaComponent {
  propiedadesVenta: ResponseInmueble[] = [];
  display: boolean = false;

  constructor(private router: Router, private propiedadesService: PropiedadesService) {}

  ngOnInit(): void {
    this.showPropiedades();
  }

  showPropiedades(masFilter?: any) {
    this.propiedadesVenta = [];
    let filtros = {
      tipoPublicacion: 'Venta',
    };
    let filtersMore = masFilter ? { ...filtros, ...masFilter } : filtros;
    let json = window.btoa(JSON.stringify(filtersMore));
    this.propiedadesService.getPropiedadesFiltro(json).subscribe({
      next: async response => {
        if (!response.length) {
          return;
        }
        let inmueblesLista = await this.recorrerInmuebles(response);
        this.propiedadesVenta = inmueblesLista;
      },
      error: err => {
        console.error(err);
      },
    });
  }

  async recorrerInmuebles(inmuebles: ResponseInmueble[]): Promise<ResponseInmueble[]> {
    for await (const item of inmuebles) {
      let inmuebles = this.urlImgInmuebles(item.fotos);
      item.fotos = inmuebles;
    }
    return inmuebles;
  }

  urlImgInmuebles(fotoInmueble: ResponseArchivo[]): ResponseArchivo[] {
    if (!fotoInmueble.length) {
      return [];
    }

    for (const item of fotoInmueble) {
      item.url = this.propiedadesService.getArchivosUrlImg(item.nombreArchivo);
    }

    return fotoInmueble;
  }

  verRequisitos() {
    this.display = true;
  }

  closeModalUpload(event: any) {
    this.display = event;
  }

  downloadImg() {
    const aLink = document.createElement('a');
    aLink.href = environment.arriendoPropiedadImg;
    aLink.setAttribute('download', 'requisitos-venta');
    document.body.appendChild(aLink);
    aLink.click();
    document.body.removeChild(aLink);
  }
}
