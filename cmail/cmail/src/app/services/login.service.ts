import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api = 'http://localhost:3200/login';

  constructor(private httpCliente: HttpClient) { }

  logar(dadosLogin: any) {
    return this.httpCliente.post(this.api, dadosLogin).pipe(map(response => {
      return response;
      }
      ));
  }
}
