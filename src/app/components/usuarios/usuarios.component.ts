import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/Api.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  informacion: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    console.log(environment.backend);
    this.apiService.getUsuarios().subscribe(
      (data: any) => {
        this.informacion = data;
        console.log(this.informacion);
      },
      (err) => {
        console.log(err.message);
      }
    );
  }
}
