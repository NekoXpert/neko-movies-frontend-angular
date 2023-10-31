import { Confiteria } from "./Confiteria.model";
import { Usuario } from "./Usuario.model";
import { Transaccion } from "./Transaccion.model";


export interface CompraConfiteria {
    idCompraConfiteria: number;
    producto: Confiteria;
    usuario: Usuario;
    transaccion?: Transaccion;
    cantidad: number;
    precioTotal: number;
}
