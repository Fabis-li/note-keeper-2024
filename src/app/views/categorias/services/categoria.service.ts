import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ListagemCategoria } from '../models/categorias.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly url = `${environment.API_URL}/categorias`;

  constructor(private http: HttpClient) { }

  selecionarTodos() {
    return this.http.get<ListagemCategoria[]>(this.url);
  }
}


