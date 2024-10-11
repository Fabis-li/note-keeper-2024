import { NgIf, AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { DetalhesCategoria } from '../../categorias/models/categorias.model';
import { CategoriaService } from '../../categorias/services/categoria.service';
import { NotaService } from '../services/nota.service';
import { DetalhesNota } from '../models/nota.models';
import { NotificacaoService } from '../../../core/components/shell/notificacao/notificacao.service';

@Component({
  selector: 'app-exclusao-nota',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    AsyncPipe,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './exclusao-nota.component.html',
  styleUrl: './exclusao-nota.component.scss'
})
export class ExclusaoNotaComponent implements  OnInit {
  id?: number;
  nota$?: Observable<DetalhesNota>;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notaService: NotaService,
    private notificacao: NotificacaoService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    if(!this.id) {
      this.notificacao.erro('Não foi possível recuperar o id requisitado.');

      return;
    }

    this.nota$ = this.notaService.selecionarPorId(this.id);
  }

  excluir() {
    if(!this.id) {
      this.notificacao.erro('Não foi possível recuperar o id requisitado.');

      return;
    }

    this.notaService.excluir(this.id).subscribe((res) => {
      this.notificacao.sucesso(`O registro id [${this.id}] foi excluído com sucesso!`);

      this.router.navigate(['/notas']);
    });
  }

}
