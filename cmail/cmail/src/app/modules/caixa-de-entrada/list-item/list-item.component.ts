import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { Email } from 'src/app/model/email';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: [ './list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input('email')
  emailData: Email;

  @Output('eventoRemover') vaiRemover = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  removerEmail(click: Event) {

    if(confirm('Tem certeza?'))
      this.vaiRemover.emit({remover: true, id: this.emailData.id});
    
  }

}
