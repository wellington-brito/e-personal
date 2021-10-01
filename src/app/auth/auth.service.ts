export class AuthService {

    fakeAuth(userAuth){
        let user = localStorage.getItem( userAuth.nome );
        if ( user ) {
            console.log("Logado!!");
        }    
    }
}
