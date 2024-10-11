import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { notasRoutes } from './views/notas/notas.routes';
import { categoriasRoutes } from './views/categorias/categoria.routes';

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},

  { path: 'categorias', children:categoriasRoutes},

  { path: 'notas', children:notasRoutes},
];
