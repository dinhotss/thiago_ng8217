import { Component, OnInit, Input } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'cmail-form-group',
  templateUrl: './form-group.component.html',
  styles: ['label { text-transform: capitalize} ']
})
export class FormGroupComponent implements OnInit {

  @Input() idCampo = '';
  @Input() msg = '';
  @Input('ctrl') controle: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  getControle(): boolean {
    return this.controle.get(this.idCampo).invalid && this.controle.get(this.idCampo).touched;
  }

  getRequired(): boolean {
    return this.controle.get(this.idCampo).getError('required');
  }
}
