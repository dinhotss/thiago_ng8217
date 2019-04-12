import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  telefone = new FormControl('', [Validators.required, Validators.pattern('([0-9]{4}|[0-9]{5})-?[0-9]{4}'), Validators.maxLength(10), Validators.minLength(8)]);
  avatar = new FormControl('', [Validators.required, this.validaAvatar.bind(this)]);

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(2)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    senha: new FormControl(''),
    telefone: this.telefone,
    avatar: this.avatar
  })

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  handleCadastroUsuario() {
    if(this.formCadastro.valid){
      console.log(this.formCadastro.value);
      this.formCadastro.reset();
    }
    else {
      this.validarTodosCampos(this.formCadastro);
      console.log("Campos precisam ser preenchidos!")
    }
  }

  validarTodosCampos(form: FormGroup){
    for(let prop in form.value)
      this.validar(form.get(prop));
  }

  validar(control: AbstractControl) {
    if(control.invalid) {
      console.log(control)
      control.markAsTouched();
    }
  }

  validaAvatar(controle: FormControl) {
    return this.httpClient.head(controle.value, {
      observe: 'response'
    }).pipe(
      map((response: HttpResponseBase) => {
        console.log(response);
        return response.ok ? null : { urlInvalida: true }
      }),
      catchError((error) => {
        return [{urlInvalida: true}];
      })
    )
  }

}
