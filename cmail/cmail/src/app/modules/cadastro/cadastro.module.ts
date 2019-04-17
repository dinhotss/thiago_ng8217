import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { SharedModule } from '../../components/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { UserService } from 'src/app/services/user.service';

@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    CadastroComponent,
    CadastroRoutingModule
  ],
  providers: [
    UserService
  ]
})
export class CadastroModule { }
