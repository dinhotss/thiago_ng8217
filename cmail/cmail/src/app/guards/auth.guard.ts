import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(private roteador: Router) {}

  canActivate(): boolean {

    if(localStorage.getItem('token')) {
      return true;
    }
    else {
      this.roteador.navigate(['']);
      return false;
    }
  }
  
}
