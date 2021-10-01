import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../users/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  authservice: AuthService = new AuthService();
  user: User;

  constructor() { }

  ngOnInit() { }

  onClickLogin(f: NgForm){
    console.log(f);  // { first: '', last: '' }
    console.log('entrou aqui');
    //console.log(f.valid);  // false
  }


}
