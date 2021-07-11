import { ApiService } from './../../services/Api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css'],
})
export class ReservasComponent implements OnInit {
  reservas: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLibros().subscribe((data) => {
      //      this.reservas = data['reservas'];
      console.log(data);
    });
  }
}
