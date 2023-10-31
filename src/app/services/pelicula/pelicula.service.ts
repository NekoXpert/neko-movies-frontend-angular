import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from 'src/app/models/Pelicula.model';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private apiUrl = 'http://localhost:8080/api/peliculas';

  constructor(private http: HttpClient) { }

  crearPelicula(pelicula: Pelicula): Observable<Pelicula> {
    return this.http.post<Pelicula>(this.apiUrl, pelicula);
  }

  obtenerPelicula(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.apiUrl}/${id}`);
  }
}
