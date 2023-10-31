import { CompraConfiteria} from "./CompraConfiteria.model";
import { Entrada } from "./Entrada.model";
import { Usuario } from "./Usuario.model";

export interface Transaccion {
    idTransaccion: number;
    entradas: Entrada[];
    comprasConfiteria: CompraConfiteria[];
    usuario: Usuario;
    fechaHora: string; // ISO string
    montoTotal: number;
    detalle: any; 
}
