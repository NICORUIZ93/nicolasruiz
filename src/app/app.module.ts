import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LibrosComponent } from './components/libros/libros.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { EditarComponent } from './components/editar/editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    LibrosComponent,
    ReservasComponent,
    EditarComponent,
    LoginComponent,
    RegistroComponent,
    CrearLibroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
