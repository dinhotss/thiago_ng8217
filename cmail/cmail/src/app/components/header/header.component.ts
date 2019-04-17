import { Component, OnInit } from "@angular/core";
import { LoginService } from 'src/app/services/login.service';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: [
        './header.component.css',
        './header-search.css'
    ]
})

export class HeaderComponent implements OnInit {
    url: string = "http://placehold.it/48x48";
    nome: string = "Pessoa de Tal";
    email: string = "pesso.al@cmail.br";
    loginService: LoginService;

    constructor(private _loginService: LoginService) {
        this.loginService = _loginService;
    }

    ngOnInit(): void {
        let url = localStorage.getItem('avatar');
        let nome = localStorage.getItem('nome');
        let email = localStorage.getItem('email');
       
        if(url)
            this.url = url;
        if(url)
            this.nome = nome;
        if(url)
            this.email = email;

    }

    private _isMenuOpen = false;

    onToggleMenu() {
        this._isMenuOpen = !this.isMenuOpen;
    }

    get isMenuOpen() {
        return this._isMenuOpen;
    }

}