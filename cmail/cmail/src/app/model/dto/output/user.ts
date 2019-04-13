export class User {
    id = '';
    nome = '';
    username = '';
    password = ''
    telefone = '';
    avatar = '';

    constructor ({name, username, senha, phone, avatar_url}) {
        this.nome = name;
        this.username = username;
        this.password = this.password;
        this.telefone = phone;
        this. avatar = avatar_url;
    }
}