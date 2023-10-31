import { Sede } from './Sede.model';

export interface Sala {
    idSala: number;
    nombreSala: string;
    capacidad: number;
    sede: Sede;
}
