import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/Api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  form: FormGroup;
  reservas: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.form = formBuilder.group({
      nombre: [''],
      apellido: [''],
      contraseña: [''],
      reservas: [''],
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
    this.apiService.crearUsuario(this.form.value).subscribe((dato) => {
      console.log(dato);

      this.router.navigate(['biblioteca']);
    });
  }
}
