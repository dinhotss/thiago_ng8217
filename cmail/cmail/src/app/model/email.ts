export class Email{
    checked = false;
    destinatario = '';
    assunto = '';
    conteudo = '';
    data = '';
    id = '';
    
    constructor(emailApi: any) {
        if(emailApi == null)
            return;
        this.destinatario = emailApi.to;
        this.assunto = emailApi.subject;
        this.conteudo = emailApi.content;
        this.data = emailApi.created_at;
        this.id = emailApi.id;
    }
}