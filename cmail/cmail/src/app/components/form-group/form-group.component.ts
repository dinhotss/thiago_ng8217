import { Component, OnInit, Input } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { FormControl, FormGroup, NgModel } from '@angular/forms';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styles: ['label { text-transform: capitalize} ']
})
export class FormGroupComponent implements OnInit {

  @Input() idCampo = '';
  @Input() msg = '';
  @Input('ctrl') controle: FormGroup;
  @Input('crtlModel') controleModel: NgModel;

  constructor() { }

  ngOnInit() {
  }

  getControle(): boolean {
    if(this.controleModel)
      return this.controleModel.invalid && this.controleModel.touched;
      
    return this.controle.get(this.idCampo).invalid && this.controle.get(this.idCampo).touched;
  }

  getRequired(): boolean {
    if(this.controleModel)
      return this.controleModel.getError('required');
      
    return this.controle.get(this.idCampo).getError('required');
  }
}
