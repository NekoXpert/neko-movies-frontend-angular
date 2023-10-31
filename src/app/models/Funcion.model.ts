import { Pelicula } from './Pelicula.model';
import { Sala } from './Sala.model';

export interface Funcion {
    id: number;
    pelicula: Pelicula;
    fechaHora: string; // ISO string
    sala: Sala;
    precio: number;
}
