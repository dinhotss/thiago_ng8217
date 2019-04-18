import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/model/email';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { HttpErrorResponse, HttpResponseBase } from '@angular/common/http';

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
  
  constructor(private emailService: EmailService) { }

  ngOnInit() {
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
      (response: any) => {
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

  getEmails() {
    return this.emailList.sort((a: Email, b: Email) => Date.parse(b.data) > Date.parse(a.data) ? 1 : -1);
  }

}
