import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  username: string;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    if(this.activeRoute.snapshot.params)
      this.username = this.activeRoute.snapshot.params.username;

    console.log(this.username);

    this.activeRoute.params.subscribe(parametros => console.log(parametros.username));
  }

}
