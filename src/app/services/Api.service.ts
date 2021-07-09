import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsuarios() {
    return this.http.get("http://localhost:3000/api/users/all", { responseType: 'json' });
  }
  getLibros(){
    return this.http.get("http://localhost:3000/api/libros/all", { responseType: 'json' });
  }
}
