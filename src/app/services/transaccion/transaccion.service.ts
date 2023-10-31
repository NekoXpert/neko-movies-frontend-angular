import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaccion } from 'src/app/models/Transaccion.model';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  private apiUrl = 'http://localhost:8080/api/transacciones';

  constructor(private http: HttpClient) { }

  crearTransaccion(transaccion: Transaccion): Observable<Transaccion> {
    return this.http.post<Transaccion>(this.apiUrl, transaccion);
  }

  obtenerTransaccion(id: number): Observable<Transaccion> {
    return this.http.get<Transaccion>(`${this.apiUrl}/${id}`);
  }
}
