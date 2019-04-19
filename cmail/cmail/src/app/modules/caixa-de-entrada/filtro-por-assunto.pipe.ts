import { Pipe, PipeTransform } from '@angular/core';
import { Email } from 'src/app/model/email';

@Pipe({
  name: 'filtroPorAssunto'
})
export class FiltroPorAssuntoPipe implements PipeTransform {

  transform(emailList: Email[], filtro: string): any {
    return emailList.filter(email => !filtro || (email.assunto.toLowerCase().indexOf(filtro) >= 0));
  }

}
