import { Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[cmailFormField]'
})
export class FormFieldDirective implements OnInit {
  
  constructor(private elemento: ElementRef) { }

  ngOnInit(): void {
    const campo:HTMLInputElement = this.elemento.nativeElement;
    campo.classList.add('mdl-textfield__input');
    campo.placeholder = ' ';
 
    if(campo.name)
      campo.id = campo.name;
    else
      throw new Error('Input sem o atributo name!');
  }

}
