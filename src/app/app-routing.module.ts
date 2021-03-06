import { CrearLibroComponent } from './components/crear-libro/crear-libro.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { EditarComponent } from './components/editar/editar.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { LibrosComponent } from './components/libros/libros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'crearlibro',
    component: CrearLibroComponent,
  },
  {
    path: 'biblioteca/:id',
    component: LibrosComponent,
  },
  {
    path: 'reservas/:id',
    component: ReservasComponent,
  },
  {
    path: 'editar/:id',
    component: EditarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
