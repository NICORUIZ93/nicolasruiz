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
    private apiService: ApiService
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
      console.log(data);
    });
  }
}
