import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  aparece = false;
  username = "";
  user: User = {nome: '', senha: '', cpf: '', email: '', perfil: '', role: '', token: ''};

  constructor(private router: Router, private auth: AuthGuardService, public authService: AuthService) { }

  ngOnInit() { }

  /**
   * @login função para acessar o service de autenticação para fazer login.
   */
  login(f: NgForm) { 
    let user = { 
      nome:  f.controls.nome.value,
      senha: f.controls.senha.value
    }
    this.aparece = this.authService.login(user); 
  }

  /**
   * @recarregarPagina função acessar o service de autenticação para recarregar a página após fazer login.
   */
  recarregarPagina(): void { 
    this.authService.recarregarPagina(); 
  }
  

}
