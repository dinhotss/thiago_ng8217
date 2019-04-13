import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { SharedModule } from '../../components/shared.module';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CadastroModule { }
