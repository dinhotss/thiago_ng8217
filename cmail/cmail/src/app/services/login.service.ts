import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginModule } from '../modules/login/login.module';

@Injectable()
export class LoginService {

  private readonly api = environment.urlApi + 'login';

  constructor(private httpCliente: HttpClient) { }

  logar(dadosLogin: any) {
    return this.httpCliente.post(this.api, dadosLogin).pipe(map(response => {
      localStorage.setItem('token', response['token']);
      localStorage.setItem('avatar', response['avatarUrl']);
      localStorage.setItem('nome', response['name']);
      localStorage.setItem('email', response['email']);
      return response;
    }
    ));
  }
  
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('avatar');
    localStorage.removeItem('toknomeen');
    localStorage.removeItem('email');
  }

}
