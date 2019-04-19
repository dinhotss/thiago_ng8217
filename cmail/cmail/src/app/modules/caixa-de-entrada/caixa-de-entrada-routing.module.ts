import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { EmailCorpoComponent } from './email-corpo/email-corpo.component';

const rotasDoModulo: Routes = [
  {path: "", component: CaixaDeEntradaComponent},
  {path: "corpo", component: EmailCorpoComponent},
  {path: "corpo/:id", component: EmailCorpoComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(rotasDoModulo)
  ],
  exports: [
    RouterModule
  ]
})

export class CaixaDeEntradaRoutingModule { }
