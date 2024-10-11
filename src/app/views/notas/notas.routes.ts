import { Routes } from "@angular/router";
import { ListagemNotasComponent } from "./listar/listagem-notas.component";
import { CadastroNotasComponent } from "./cadastrar/cadastro-notas.component";
import { EdicaoNotaComponent } from "./editar/edicao-nota.component";
import { ExclusaoNotaComponent } from "./excluir/exclusao-nota.component";

export const notasRoutes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: 'listar', component: ListagemNotasComponent },
  { path: 'cadastrar', component: CadastroNotasComponent },
  { path: 'editar/:id', component: EdicaoNotaComponent },
  { path: 'excluir/:id', component:ExclusaoNotaComponent },
];

