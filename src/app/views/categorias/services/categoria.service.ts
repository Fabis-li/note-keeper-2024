import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { CadastroCategoria, CategoriaCriada, CategoriaEditada, DetalhesCategoria, EdicaoCategoria, ListagemCategoria } from '../models/categorias.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  private readonly url = `${environment.API_URL}/categorias`;

  constructor(private http: HttpClient) { }

  cadastrar(novaCategoria: CadastroCategoria):Observable<CategoriaCriada> {
    return this.http.post<CategoriaCriada>(this.url, novaCategoria);
  }

  editar(id: number, categoriaEditada: EdicaoCategoria):Observable<CategoriaEditada> {
    return this.http.put<CategoriaEditada>(`${this.url}/${id}`, categoriaEditada);
  }

  selecionarTodos() {
    return this.http.get<ListagemCategoria[]>(this.url);
  }

  selecionarPorId(id: number) {
    return this.http.get<DetalhesCategoria>(`${this.url}/${id}`);
  }
}
