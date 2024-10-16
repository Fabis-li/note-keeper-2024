import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { AsyncPipe, NgForOf, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { CadastroNota, DetalhesNota } from '../models/nota.models';
import { ListagemCategoria } from '../../categorias/models/categorias.model';
import { Observable } from 'rxjs';
import { CategoriaService } from '../../categorias/services/categoria.service';
import { MatCardModule } from '@angular/material/card';
import { NotaService } from '../services/nota.service';
import { NotificacaoService } from '../../../core/components/shell/notificacao/notificacao.service';

@Component({
  selector: 'app-cadastro-notas',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgSwitch,
    NgSwitchCase,
    RouterLink,
    AsyncPipe,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule ,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule
  ],
  templateUrl: './cadastro-notas.component.html',
  styleUrl: './cadastro-notas.component.scss'
})
export class CadastroNotasComponent implements OnInit {
  notaForm: FormGroup;

  categorias$?: Observable<ListagemCategoria[]>;

  constructor(
    private router: Router,
    private notaService: NotaService,
    private categoriaService: CategoriaService,
    private notificacao: NotificacaoService
  ) {
    this.notaForm = new FormGroup({
      titulo: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
      conteudo: new FormControl<string>('',Validators.required),
      categoriaId: new FormControl<number>(0),
    });
  }

  get titulo(){
    return this.notaForm.get('titulo');
  }

  get conteudo(){
    return this.notaForm.get('conteudo');
  }

  ngOnInit(): void {
    this.categorias$ = this.categoriaService.selecionarTodos();
  }

  cadastrar(){
    if(this.notaForm.invalid) return;

    const novaNota: CadastroNota = this.notaForm.value;

    this.notaService.cadastrar(novaNota).subscribe((res) => {
      this.notificacao.sucesso(
        `O registro iD [${res.id}] foi cadastrado com sucesso!`
      );

      this.router.navigate(['/notas']);
    })
  }

    campoNaoFoiTocado(campo: string): boolean {
      const controle = this.notaForm.get(campo);

      if(!controle) return false;

      return controle.pristine
    }

    mapearTituloDaCategoria(id: number, categorias: ListagemCategoria[]): string {
      const categoria = categorias.find((categoria) => categoria.id === id);

      return categoria ? categoria.titulo : 'Categoria não encontrada';
    }

}
