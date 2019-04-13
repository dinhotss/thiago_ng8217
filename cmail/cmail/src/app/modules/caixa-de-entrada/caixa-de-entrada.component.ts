import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/model/email';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html'
})
export class CaixaDeEntradaComponent implements OnInit {
  private _isNewEmailFormOpen = false;
  readonly regexEmail = "^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$";
  emailList: Email[] = [];
  email = new Email();
  invalid = false;

  checkedAll = false;

  constructor() { }

  ngOnInit() {
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

    this.emailList.push(this.email);
    this.emailList.forEach(x => {x.checked = this.checkedAll});
    this.email = new Email();

    formEmail.resetForm();
    this.toggleNewEmailForm();
  }


}
