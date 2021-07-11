import { ApiService } from 'src/app/services/Api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  idLibro: any;
  libro: any;
  form: FormGroup;
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = fb.group({
      nombre: [''],
      autor: [''],
      categoria: [''],
      cantidadDisponible: [''],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.idLibro = params.id;
      console.log(params.id);
    });
    this.apiService.getLibro(this.idLibro).subscribe(async (libro) => {
      this.libro = libro;
      console.log(libro);
    });
  }

  submit() {
    console.log(this.form.value);
    this.apiService
      .editarLibro(this.idLibro, this.form.value)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/biblioteca']);
      });
  }
}
