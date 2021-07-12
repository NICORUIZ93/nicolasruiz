import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = environment.apiRest;

  constructor(private http: HttpClient) {}

  getUsuario(user: any) {
    return this.http.post(`${this.url}/api/users/user`, user, {
      responseType: 'json',
    });
  }

  getUsuarioId(user: any) {
    return this.http.get(`${this.url}/api/users/userid/${user}`);
  }
  crearUsuario(user: any) {
    return this.http.post(`${this.url}/api/users/crear`, user, {
      responseType: 'text',
    });
  }

  modificarUsuario(id: any, user: any) {
    return this.http.put(`${this.url}/api/users/actualizar/${id}`, user, {
      responseType: 'text',
    });
  }

  getLibros() {
    return this.http.get(`${this.url}/api/libros/all`, {
      responseType: 'json',
    });
  }

  getLibro(id: any) {
    return this.http.get(`${this.url}/api/libros/libro/${id}`, {
      responseType: 'json',
    });
  }

  deleteLibro(id: string) {
    return this.http.delete(`${this.url}/api/libros/eliminar/${id}`, {
      responseType: 'text',
    });
  }

  CrearLibro(body: any) {
    return this.http.post(`${this.url}/api/libros/crear`, body, {
      responseType: 'text',
    });
  }

  editarLibro(id: string, body: any) {
    return this.http.put(`${this.url}/api/libros/actualizar/${id}`, body, {
      responseType: 'text',
    });
  }
  login(user: any) {
    return this.http.post(`${this.url}/api/login/user`, user);
  }
}
