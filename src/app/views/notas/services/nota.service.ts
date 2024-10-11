import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CadastroNota, DetalhesNota, EdicaoNota, ListagemNota, NotaCriada, NotaEditada, NotaExcluida } from '../models/nota.models';

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  private readonly url = `${environment.API_URL}/notas`;

  constructor(private http: HttpClient) { }

  cadastrar(novaNota: CadastroNota):Observable<NotaCriada> {
    return this.http.post<NotaCriada>(this.url, novaNota);
  }

  editar(id: number, notaEditada: EdicaoNota):Observable<NotaEditada> {
    return this.http.put<NotaEditada>(`${this.url}/${id}`, notaEditada);
  }

  excluir(id: number):Observable<NotaExcluida> {
    return this.http.delete<NotaExcluida>(`${this.url}/${id}`);
  }

  selecionarTodos():Observable<ListagemNota[]> {
    const urlCompleto = `${this.url}?_expand=categoria`;

    return this.http.get<ListagemNota[]>(urlCompleto);
  }

  selecionarPorId(id: number):Observable<DetalhesNota> {
    const urlCompleto = `${this.url}/${id}?_expand=categoria`;

    return this.http.get<DetalhesNota>(urlCompleto);
  }
}
