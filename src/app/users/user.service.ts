export class UserService {
    users = [
        {
            nome: 'Ana',
            senha: 'aninha123',
            cpf: '00000000000',
            email: 'aninhagatinha321@gmail.com',
            perfil: 'USER',
        },
        {
            nome: 'Carlos',
            senha: 'crls@120',
            cpf: '11111111111',
            email: 'carlos.s21@gmail.com',
            perfil: 'ADMIN',
        },
    ]

    constructor() { }
    
    setUser(){
        localStorage.setItem( "usersArray", JSON.stringify( this.users ));
    }    

    getUser( key ){
        let user = localStorage.getItem( key );
        if ( user ) {
            return user;    
        }        
    }

    getAll( ){
        let items = JSON.parse(localStorage.getItem("usersArray"));        
        return items;        
    }
    
}