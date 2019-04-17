import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Email } from '../model/email';
import { EmailDto } from '../model/dto/input/emailDto'
import { map } from 'rxjs/operators';

@Injectable()
export class EmailService {

  private readonly api = environment.urlApi + 'emails'
  private readonly token: string = localStorage.getItem('token');
  private cabecalho = new HttpHeaders({'Authorization': this.token});

  constructor(private httpCliente: HttpClient) { }

  enviar(dadosForm: Email) {
    return this.httpCliente.post(this.api, new EmailDto(dadosForm), {headers: this.cabecalho}).pipe(
      map((resposta: any) => {
        return new Email(resposta) }
        )
    );;
  }

  buscar() {
    console.log('');
    return this.httpCliente.get(this.api, {headers: this.cabecalho}).pipe(
      map((resposta: any) => {
        console.log(resposta);
        return new Email(resposta) }
        )
    );
  }
}
