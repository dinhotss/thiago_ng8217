import { Component, OnInit, ElementRef } from '@angular/core';
import { Email } from 'src/app/model/email';
import { EmailService } from 'src/app/services/email.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageService } from 'src/app/services/page.service';

@Component({
  selector: 'cmail-email-corpo',
  templateUrl: './email-corpo.component.html',
  styles: []
})
export class EmailCorpoComponent implements OnInit {
  email: Email;
  
  constructor(private emailService: EmailService, private activeRoute: ActivatedRoute, private router: Router, private pageService: PageService) { }

  ngOnInit() {
    if(!this.activeRoute.snapshot.params || !this.activeRoute.snapshot.params.id) {
      this.router.navigate(['../../inbox/']);
      return;
    } 
      
    let id = this.activeRoute.snapshot.params.id;

    this.emailService.buscar().subscribe(
      (resposta) => {
        this.email = resposta.filter(x => x.id === id)[0];

        this.pageService.definirTitulo(this.email.assunto);
      }
    )    
    
  }

}
