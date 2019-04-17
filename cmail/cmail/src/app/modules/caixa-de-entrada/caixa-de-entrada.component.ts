import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/model/email';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [`
    ul{
      width: 100%
    }
    ul, li {
      list-style-type: nome;
      margin: 0;
      padding: 0;
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
    this.invalid  = formEmail.invalid;
    
    //formEmail.control.get('para').markAsTouched();

    if(this.invalid)
      return;

    this.emailService.enviar(this.email).subscribe(
      (response: any) => {
        this.emailService.buscar().subscribe((response: any[]) => {
          console.log(response);
          this.emailList = response;
        });
        this.email = new Email(null);
        formEmail.resetForm();
        this.toggleNewEmailForm();
      }
      ,(responseError: HttpErrorResponse) => {
        this.mensagensErro = responseError;

      }
    )
    
  }


}
