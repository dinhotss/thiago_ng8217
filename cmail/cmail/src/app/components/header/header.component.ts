import { Component, OnInit } from "@angular/core";
import { LoginService } from 'src/app/services/login.service';
import { PageService } from 'src/app/services/page.service';
import { HeaderService } from 'src/app/services/header.service';

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
    titulo: string = 'Cmail';
    loginService: LoginService;

    constructor(private _loginService: LoginService, private pageService: PageService, private headerService: HeaderService) {
        this.loginService = _loginService;
        pageService.getTitulo().subscribe(titulo => {
            this.titulo = titulo + ' - Cmail'
            document.querySelector('title').textContent = this.titulo;
        });
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

    handleChange(evento) {
        this.headerService.setValorFiltro(evento.target.value);
    }

}