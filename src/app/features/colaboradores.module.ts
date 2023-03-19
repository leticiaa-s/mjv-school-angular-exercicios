import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarColaboradoresComponent } from './colaboradores/listar-colaboradores/listar-colaboradores.component';



@NgModule({
  declarations: [
    ListarColaboradoresComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListarColaboradoresComponent
  ]
})
export class ColaboradoresModule { }
