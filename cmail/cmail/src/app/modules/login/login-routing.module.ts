import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
