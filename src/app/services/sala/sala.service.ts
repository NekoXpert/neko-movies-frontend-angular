import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sala } from 'src/app/models/Sala.model';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  private apiUrl = 'http://localhost:8080/api/salas';

  constructor(private http: HttpClient) { }

  crearSala(sala: Sala): Observable<Sala> {
    return this.http.post<Sala>(this.apiUrl, sala);
  }

  obtenerSala(id: number): Observable<Sala> {
    return this.http.get<Sala>(`${this.apiUrl}/${id}`);
  }
}
