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
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    if(!this.id) {
      console.error('Não foi possível recuperar o id requisitado.');

      return;
    }

    this.nota$ = this.notaService.selecionarPorId(this.id);
  }

  excluir() {
    if(!this.id) {
      console.error('Não foi possível recuperar o id requisitado.');

      return;
    }

    this.notaService.excluir(this.id).subscribe((res) => {
      console.log(`O registro id [${this.id}] foi excluído com sucesso!`);

      this.router.navigate(['/notas']);
    });
  }

}
