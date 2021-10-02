import { Injectable } from '@angular/core';
import { Router,  } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../users/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router: Router, private userService: UserService, public jwtHelper: JwtHelperService) {}  
  
  redirect: [];
  linkOriginalList = [];
  authenticated;
  reloaded = true;
  user: User = {nome: '', senha: '', cpf: '', email: '', perfil: '', role: '', token: ''};
  myObj;

  public aparece = false;
  public message = "";


   /**
     * @login função que realiza requisição de login na api.
     * @param user - objeto com dados do usuário passado como parêmtro ao clicar no botão "Entrar.
     * @returns boolean - verdadeiro ou falso: sobre o sucesso da requisção de login;
     */
    login(userAuth) {      

        let users = this.userService.getAll();

        users.forEach(element => {
            if ( element.nome === userAuth.nome ) {         
                this.myObj = element;
                this.setUserDados();
                this.router.navigate(['/home']);     
                this.aparece = true;               
            }else{
                this.message = "Usuário não existe";
                this.aparece = false;            
            }     
        });
        
        return true;
  }

  /**
   * @setUserDados função para pegar os dados de autenticação do usuário no response e atribuir no cookie.
   */
  setUserDados() {
      this.authenticated = true;
      this.userService.setUser();
      localStorage.setItem('username', this.myObj.nome);
      localStorage.setItem('userHash', this.myObj.token);
  }

  /**
   * @logout função para retirar do cookie os dados de autenticação do usuário e redirecionar para a tela de login.
   */
  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('userHash');
    this.aparece = false;
    this.router.navigate(['/login']);
  }

  /**
   * @isLoggedIn função que retorna verdadeiro ou falso para identificar se o usuário foi autenticado.
   */
  get isLoggedIn(): boolean {
      return localStorage.getItem('userHash') !== '';
  }

  /**
   * @recarregarPagina função para redirecionar a página caso o usuário já tenha sido autenticado ou não.
   */
  recarregarPagina() {
      if (localStorage.getItem('userHash') && localStorage.getItem('username')) {
          this.router.navigate(['/home']);
      } else {
          this.router.navigate(['/login']);
      }
  }

  /**
   * @handleError função. para tratar erro na rquisição de login.
   */
  private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
  }

  /**
   * @isAuthenticated função. para checar token do usuário e liberar ou não proteção de rotas.
   */
  public isAuthenticated(): boolean {
    const userHash = localStorage.getItem('userHash');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(userHash);
  }

}
