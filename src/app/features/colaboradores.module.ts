import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarColaboradoresComponent } from './colaboradores/listar-colaboradores/listar-colaboradores.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListarColaboradoresComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ListarColaboradoresComponent
  ]
})
export class ColaboradoresModule { }
