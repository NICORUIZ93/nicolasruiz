import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../services/Api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent implements OnInit {
  idUser: any;
  libros: any;
  user: any;
  estado: boolean = false;
  reservas: any[] = [];
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params: any) => {
      this.idUser = params.id;
      console.log(this.idUser);
    });
  }

  ngOnInit(): void {
    this.apiService.getUsuarioId(this.idUser).subscribe((data: any) => {
      this.estado = data.role;
    });
    this.apiService.getLibros().subscribe(
      (data) => {
        this.libros = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  eliminarLibro(id: string) {
    this.apiService.deleteLibro(id).subscribe((data) => {
      console.log(data);

      this.apiService.getLibros().subscribe(
        (data) => {
          this.libros = data;
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  editarLibro(id: string, body: any) {
    this.apiService.editarLibro(id, body);
  }

  reservacion() {
    this.router.navigate(['reservas', this.idUser]);
  }

  anadir(libro: any) {
    this.apiService.getUsuarioId(this.idUser).subscribe((user: any) => {
      this.user = user;
      this.reservas.push(libro);
      user.reservas = this.reservas;

      this.apiService
        .modificarUsuario(this.idUser, this.user)
        .subscribe((data: any) => {
          console.log(data);
          console.log(libro);
        });
    });

    // this.user['reservas'] = libro;
  }
}
