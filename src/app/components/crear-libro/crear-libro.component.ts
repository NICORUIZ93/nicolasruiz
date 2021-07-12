import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/Api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css'],
})
export class CrearLibroComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.form = formBuilder.group({
      nombre: [''],
      autor: [''],
      categoria: [''],
      cantidadDisponible: 0,
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
    this.apiService.CrearLibro(this.form.value).subscribe((dato) => {
      console.log(dato);

      this.router.navigate(['biblioteca']);
    });
  }
}
