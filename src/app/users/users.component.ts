import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  displayedColumns: string[] = ['cpf', 'nome', 'email', 'perfil'];
  
  users: User[]; 
  constructor( private userService: UserService, private router: Router) { }

  ngOnInit() {    
     this.users = this.userService.getAll();   
  }

  delete( users ){

    users.forEach(element => {
      this.userService.delete(element.value.nome);
    });
    window.location.reload();
    //this.router.navigate(["/users"])
    
   }
}
