import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component'
import { FormGroupComponent } from './form-group/form-group.component';
import { FormFieldDirective} from './form-group/form-field-directive';
import { RouterModule } from '@angular/router';
import { LoginService } from '../services/login.service';

@NgModule({
  declarations: [HeaderComponent, FormGroupComponent, FormFieldDirective],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, FormGroupComponent, FormFieldDirective],
  providers: [
    LoginService
  ]
})
export class SharedModule { }
