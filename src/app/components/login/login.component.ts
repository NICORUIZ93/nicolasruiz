import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/Api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.form = formBuilder.group({
      nombre: [''],
      contraseña: [''],
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log(this.form.value);
    this.apiService.login(this.form.value).subscribe((data) => {
      if (data) {
        this.apiService.getUsuario(this.form.value).subscribe((data: any) => {
          console.log(data);
          this.router.navigate(['biblioteca', data.id]);
        });
      } else {
        console.log('Error en el usuario o contraseña');
      }
    });
  }
}
