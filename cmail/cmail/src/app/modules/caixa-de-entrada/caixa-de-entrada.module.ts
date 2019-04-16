import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { SharedModule } from '../../components/shared.module';
import { FormsModule } from '@angular/forms';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';

@NgModule({
  declarations: [CaixaDeEntradaComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CaixaDeEntradaRoutingModule
  ]
})
export class CaixaDeEntradaModule { }
