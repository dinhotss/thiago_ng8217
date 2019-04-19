import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/model/email';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { PageService } from 'src/app/services/page.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [`
    ul{
      flex-grow:1;
    }
    ul, li {
      list-style-type: nome;
      margin: 0;
      padding: 0;
    }
    .globalFab {
      right: 50px !important;
    }
  `]
})
export class CaixaDeEntradaComponent implements OnInit {
  private _isNewEmailFormOpen = false;
  readonly regexEmail = "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
  emailList: Email[] = [];
  email = new Email(null);
  invalid = false;

  checkedAll = false;

  mensagensErro;

  valorFiltro: string;
  
  constructor(private emailService: EmailService, private pageService: PageService, private headerService: HeaderService) { 
    this.headerService.getValorFiltro().subscribe(valor => this.valorFiltro = valor);
  }

  ngOnInit() {
    this.pageService.definirTitulo('Caixa de Entrada');
    this.emailService.buscar().subscribe(
      (resposta) => {
        this.emailList = resposta;
      }
    )
  }

  get isNewEMailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEMailFormOpen;
  }

  handleNewEmail(formEmail: NgForm) {
    console.log('a');
    this.invalid  = formEmail.invalid;
    
    //formEmail.control.get('para').markAsTouched();

    if(this.invalid)
      return;

    this.emailService.enviar(this.email).subscribe(
      (response: Email) => {
        this.emailList.push(response);
        this.email = new Email(null);
        formEmail.resetForm();
        this.toggleNewEmailForm();
      }
      ,(responseError: HttpErrorResponse) => {
        this.mensagensErro = responseError;

      }
    )
    
  }

  handleRemoverEmail(eventVaiRemover) {
    if(eventVaiRemover.remover) {
      this.emailService.remover(eventVaiRemover.id).subscribe(
        (reposta: HttpResponseBase) => {
          this.emailList = this.emailList.filter(x => x.id != eventVaiRemover.id);
        },
        (erro: HttpErrorResponse) => {
          this.mensagensErro
        }
      )
    }
  }

  getEmails(): Email[] {
    return this.emailList.filter(email => !this.valorFiltro || 
                                          (email.destinatario.toLowerCase().indexOf(this.valorFiltro.toLowerCase()) >= 0) ||
                                          (email.assunto.toLowerCase().indexOf(this.valorFiltro.toLowerCase()) >= 0) ||
                                          (email.conteudo.toLowerCase().indexOf(this.valorFiltro.toLowerCase()) >= 0) ).sort((a: Email, b: Email) => Date.parse(b.data) > Date.parse(a.data) ? 1 : -1);
  }

}
