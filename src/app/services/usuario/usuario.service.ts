import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/Usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) { }

  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/registrar`, usuario);
  }

  buscarPorEmail(email: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/email/${email}`);
  }

  buscarPorNombreUsuario(nombreUsuario: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/nombreUsuario/${nombreUsuario}`);
  }
}
