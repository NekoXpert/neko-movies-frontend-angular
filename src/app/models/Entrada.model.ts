
import { Usuario } from "./Usuario.model";
import { Funcion} from "./Funcion.model";
import { Transaccion} from "./Transaccion.model";

export interface Entrada {
    idEntrada: number;
    funcion: Funcion;
    transaccion?: Transaccion;
    usuario: Usuario;
    cantidad: number;
    ubicacionAuto: string;
    precio: number;
    precioTotal: number;
}
