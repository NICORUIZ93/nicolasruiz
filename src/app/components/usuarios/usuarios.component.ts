import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/Api.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  informacion: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {}
}
