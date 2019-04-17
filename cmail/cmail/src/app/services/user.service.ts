import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/dto/input/user';

@Injectable()
export class UserService {

  private readonly api = environment.urlApi + 'users';

  constructor(private httpCliente: HttpClient) { }

  cadastrar(usuario: User) {
    return this.httpCliente.post(this.api, usuario);
  }
}
