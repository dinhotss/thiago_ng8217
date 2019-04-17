import {Email} from '../../email'

export class EmailDto {
    to = '';
    subject = '';
    content = '';

    constructor(email: Email){
        this.to = email.destinatario;
        this.subject = email.assunto;
        this.content = email.conteudo;
    }
}