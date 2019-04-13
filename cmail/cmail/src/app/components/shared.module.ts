import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HearderComponent } from './header/header.component'
import { FormGroupComponent } from './form-group/form-group.component';
import { FormFieldDirective} from './form-group/form-field-directive';

@NgModule({
  declarations: [HearderComponent, FormGroupComponent, FormFieldDirective],
  imports: [
    CommonModule
  ],
  exports: [HearderComponent, FormGroupComponent, FormFieldDirective]
})
export class SharedModule { }
