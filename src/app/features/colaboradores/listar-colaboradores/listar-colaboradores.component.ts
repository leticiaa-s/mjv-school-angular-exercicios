import { Component } from '@angular/core';
import { Colaboradores } from 'src/app/models/colaboradores';

@Component({
  selector: 'app-listar-colaboradores',
  templateUrl: './listar-colaboradores.component.html',
  styleUrls: ['./listar-colaboradores.component.scss']
})
export class ListarColaboradoresComponent {

  colaborador: Colaboradores[] = [];
  exibirColaboradores = false;

  exibeColaboradoresTotal(){
    this.exibirColaboradores = !this.exibirColaboradores;
  }

  arrayColaboradores: Array<Colaboradores> = [
    {
      fotoPerfil: 'https://www.gov.br/cdn/sso-status-bar/src/image/user.png',
      id: 7,
      nome: 'Nathan Carlos',
      salario: 4500,
      cargo: 'Desenvolvedor Pleno',
      ativo: true
    },
    {
      fotoPerfil: 'https://www.gov.br/cdn/sso-status-bar/src/image/user.png',
      id: 2,
      nome: 'Letícia Santos',
      salario: 3000,
      cargo: 'Desenvolvedora Júnior',
      ativo: true
    },
    {
      fotoPerfil: 'https://www.gov.br/cdn/sso-status-bar/src/image/user.png',
      id: 4,
      nome: 'João Dias',
      salario: 3500,
      cargo: 'Desenvolvedor Júnior',
      ativo: false
    },
    {
      fotoPerfil: 'https://www.gov.br/cdn/sso-status-bar/src/image/user.png',
      id: 3,
      nome: 'Maria Helena',
      salario: 4000,
      cargo: 'Desenvolvedora Júnior',
      ativo: true
    },
    {
      fotoPerfil: 'https://www.gov.br/cdn/sso-status-bar/src/image/user.png',
      id: 5,
      nome: 'José Pedro',
      salario: 3500,
      cargo: 'Desenvolvedor Júnior',
      ativo: true
    },
    {
      fotoPerfil: 'https://www.gov.br/cdn/sso-status-bar/src/image/user.png',
      id: 1,
      nome: 'Ana Paula',
      salario: 3500,
      cargo: 'Desenvolvedora Júnior',
      ativo: false
    }
  ]
  
}
