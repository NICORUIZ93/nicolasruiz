import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private router: Router) {}

  getUsuario() {
    return this.http.get('http://localhost:3000/api/users/all', {
      responseType: 'json',
    });
  }
  getLibros() {
    return this.http.get('http://localhost:3000/api/libros/all', {
      responseType: 'json',
    });
  }

  getLibro(id: any) {
    return this.http.get(`http://localhost:3000/api/libros/libro/${id}`, {
      responseType: 'json',
    });
  }

  deleteLibro(id: string) {
    return this.http.delete(`http://localhost:3000/api/libros/eliminar/${id}`, {
      responseType: 'text',
    });
  }

  editarLibro(id: string, body: any) {
    return this.http.put(
      `http://localhost:3000/api/libros/actualizar/${id}`,
      body,
      {
        responseType: 'text',
      }
    );
  }
  login(user: any) {
    return this.http.get(`http://localhost:3000/api/login/user`, user);
  }
}
