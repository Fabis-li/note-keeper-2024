import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CadastroCategoria, CategoriaCriada, CategoriaEditada, CategoriaExcluida, DetalhesCategoria, EdicaoCategoria, ListagemCategoria } from '../models/categorias.model';
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

  excluir(id: number):Observable<CategoriaExcluida> {
    return this.http.delete<CategoriaExcluida>(`${this.url}/${id}`);
  }

  selecionarTodos():Observable<ListagemCategoria[]> {
    return this.http.get<ListagemCategoria[]>(this.url);
  }

  selecionarPorId(id: number):Observable<DetalhesCategoria> {
    return this.http.get<DetalhesCategoria>(`${this.url}/${id}`);
  }
}
