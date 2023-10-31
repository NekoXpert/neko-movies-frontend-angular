export interface Usuario {
    idUsuario: number;
    nombreUsuario: string;
    dni: string;
    email: string;
    placaAuto: string;
    password?: string; // ? means optional
}
