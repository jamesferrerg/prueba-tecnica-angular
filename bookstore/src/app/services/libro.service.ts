import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Libro } from '../models/libro';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private baseEndpoint = 'http://localhost:8080/api/libros';

  constructor(private http: HttpClient, private router: Router) { }

  getLibros(): Observable<Libro[]>{
    return this.http.get(this.baseEndpoint).pipe(
      map(resp => resp as Libro[])
    );
  }

  getLibro(idLibro): Observable<Libro>{
    return this.http.get<Libro>(`${this.baseEndpoint}/${idLibro}`).pipe(
      catchError(e => {
        if (e.status != 401 && e.error.mensaje){
          this.router.navigate(['/libros']);
          console.error(e.error.mensaje);
        }
        return throwError(e);
      })
    );
  }
}
