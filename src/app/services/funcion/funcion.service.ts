import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcion } from 'src/app/models/Funcion.model';


@Injectable({
  providedIn: 'root'
})
export class FuncionService {

  private apiUrl = 'http://localhost:8080/api/funciones';

  constructor(private http: HttpClient) { }

  crearFuncion(funcion: Funcion): Observable<Funcion> {
    return this.http.post<Funcion>(this.apiUrl, funcion);
  }

  obtenerFuncion(id: number): Observable<Funcion> {
    return this.http.get<Funcion>(`${this.apiUrl}/${id}`);
  }
}
