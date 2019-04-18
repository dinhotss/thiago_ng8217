import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const rotasDoModulo: Routes =[
  { path: '', component: LoginComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(rotasDoModulo)
  ],
  exports: [
    RouterModule
  ]
})

export class LoginRoutingModule { }
