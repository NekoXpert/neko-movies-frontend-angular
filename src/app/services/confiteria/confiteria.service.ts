import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Confiteria } from 'src/app/models/Confiteria.model';


@Injectable({
  providedIn: 'root'
})
export class ConfiteriaService {

  private apiUrl = 'http://localhost:8088/api/confiteria';

  constructor(private http: HttpClient) { }

  crearProductoConfiteria(confiteria: Confiteria): Observable<Confiteria> {
    return this.http.post<Confiteria>(this.apiUrl, confiteria);
  }

  obtenerProductoConfiteria(id: number): Observable<Confiteria> {
    return this.http.get<Confiteria>(`${this.apiUrl}/${id}`);
  }
}
