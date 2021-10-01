import { Component, OnInit} from '@angular/core';
import { UserService } from './users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'a-creative';
  showToolBar = true;
  //acessar rotas e identificar rota atual
  //se rota atual for igual a /login
  //atribuir false pra var showToolbar
  userService: UserService = new UserService();

  ngOnInit() {    
    this.userService.setUser();
  }

}
