import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/Api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css'],
})
export class ReservasComponent implements OnInit {
  reservas: any[] = [];
  idUser: any;
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.idUser = data.id;
      console.log(this.idUser);
    });
    this.apiService.getUsuarioId(this.idUser).subscribe((data: any) => {
      this.reservas = data['reservas'];

      console.log(data);
    });
  }
}
