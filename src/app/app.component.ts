import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exercicio-modulos';

  titulo = "Exercício de Módulos"

  colaborador = {
    id: 7,
    nome: 'Nathan Carlos',
    salario: 4500,
    cargo: 'Desenvolvedor Pleno'
  }
}
