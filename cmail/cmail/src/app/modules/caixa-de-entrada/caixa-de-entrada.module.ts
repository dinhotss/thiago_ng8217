import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { SharedModule } from '../../components/shared.module';
import { FormsModule } from '@angular/forms';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { EmailService } from '../../services/email.service';
import { ListItemComponent } from './list-item/list-item.component'

@NgModule({
  declarations: [CaixaDeEntradaComponent, ListItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CaixaDeEntradaRoutingModule
  ],
  providers: [
    EmailService
  ]
})
export class CaixaDeEntradaModule { }
