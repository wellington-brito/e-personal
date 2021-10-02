export class UserService {
    users = [
        {
            nome: 'Ana',
            senha: 'aninha123',
            cpf: '00000000000',
            email: 'aninhagatinha321@gmail.com',
            perfil: 'USER',
            logado: false,
            role: 'USER',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFuYSIsImlhdCI6MTUxNjIzOTAyMn0.T50Pell5jcA-eLIBrWNaEGvyR1SS9d3tsh3F9O9u4QY',
        },
        {
            nome: 'Carlos',
            senha: 'crls@120',
            cpf: '11111111111',
            email: 'carlos.s21@gmail.com',
            perfil: 'ADMIN',
            logado: false,
            role: 'USER',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImNhcmxvcyIsImlhdCI6MTUxNjIzOTAyMn0.B69uyh54Ka4dm_geThHSkRZWzpXb4WY1fJIcjnS2TCg',
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
        let users = JSON.parse(localStorage.getItem("usersArray"));        
        return users;        
    }
    
}