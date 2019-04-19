import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensagensErro;

  login = { 
    email: '' ,
    password: ''
  }

  constructor(private activeRoute: ActivatedRoute, private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    
    document.querySelector('title').textContent = 'Login';
    
    if(this.activeRoute.snapshot.params) 
      this.login.email = this.activeRoute.snapshot.params.username;
   
  }
  
  handleLogin (formLogin: NgForm) {
    if(formLogin.invalid) {
      for(let item in formLogin.controls) {
        formLogin.controls[item].markAsTouched();
      }

      return;
    }
    this.loginService.logar(this.login).subscribe(
      (response: any) => {
        this.router.navigate(['..', 'inbox']);
      }
      ,(responseError: HttpErrorResponse) => {
        this.mensagensErro = responseError;

      }
    );
  }

}
