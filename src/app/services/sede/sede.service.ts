import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sede } from 'src/app/models/Sede.model';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  private apiUrl = 'http://localhost:8080/api/sedes';

  constructor(private http: HttpClient) { }

  obtenerTodasLasSedes(): Observable<Sede[]> {
    return this.http.get<Sede[]>(this.apiUrl);
  }

  obtenerSedePorId(id: number): Observable<Sede> {
    return this.http.get<Sede>(`${this.apiUrl}/${id}`);
  }
}
