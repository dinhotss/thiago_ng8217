import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { User } from '../../model/dto/input/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  mensagensErro;

  telefone = new FormControl('', [Validators.required, Validators.pattern('([0-9]{4}|[0-9]{5})-?[0-9]{4}'), Validators.maxLength(10), Validators.minLength(8)]);
  avatar = new FormControl('', [Validators.required], [this.validaAvatar.bind(this)]);

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(2)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    senha: new FormControl(''),
    telefone: this.telefone,
    avatar: this.avatar
  })

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  handleCadastroUsuario() {
    this.mensagensErro = null;

    if(this.formCadastro.valid){
      console.log(this.formCadastro.value);
      this.httpClient.post('http://localhost:3200/users', new User(this.formCadastro.value)).subscribe(
        (response) => {
          console.log(response)
          //this.formCadastro.reset();
          this.router.navigate(['/login/', this.formCadastro.get('username').value]);
        }
        ,(responseError: HttpErrorResponse) => {
          console.log(responseError);
          this.mensagensErro = responseError;
        },
        
      )

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
      control.markAsTouched();
    }
  }

  validaAvatar(controle: FormControl) {
    return this.httpClient.head(controle.value, {
      observe: 'response'
    }).pipe(
      map((response: HttpResponseBase) => {
        return response.ok ? null : { urlInvalida: true }
      }),
      catchError((error) => {
        return [{urlInvalida: true}];
      })
    )
  }

}
