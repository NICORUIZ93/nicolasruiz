import { ApiService } from './../../services/Api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  libros: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLibros().subscribe(
      (data) => {
        this.libros = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
