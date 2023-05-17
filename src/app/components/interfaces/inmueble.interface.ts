export interface Inmueble {
  tipoInmueble: string;
  area: number;
  habitacion: number;
  estrato: string;
  banos: number;
  garage: string;
  estado: string;
  tiempo: string;
  precio: number;
  tipoPublicacion: string;
  tipoCons: string;
  direccion: string;
  id: number;
  copropiedad: string;
}

export class InmuebleModel implements Inmueble {
  constructor(
    public tipoInmueble: string,
    public area: number,
    public habitacion: number,
    public estrato: string,
    public banos: number,
    public garage: string,
    public estado: string,
    public tiempo: string,
    public precio: number,
    public tipoPublicacion: string,
    public tipoCons: string,
    public direccion: string,
    public id: number,
    public copropiedad: string
  ) {}
}

export type InmuebleRegistro = Omit<Inmueble, 'id'>;

export class InmuebleRegistroModel implements InmuebleRegistro {
  constructor(
    public tipoInmueble: string,
    public area: number,
    public habitacion: number,
    public estrato: string,
    public banos: number,
    public garage: string,
    public estado: string,
    public tiempo: string,
    public precio: number,
    public tipoPublicacion: string,
    public tipoCons: string,
    public direccion: string,
    public copropiedad: string
  ) {}
}
