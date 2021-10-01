import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from '../users/user.service';
import { User } from '../users/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AfterViewInit {
  
  displayedColumns: string[] = ['cpf', 'nome', 'email', 'perfil'];
  userService: UserService = new UserService();
  users: User[]; 
  dataSource: { paginator: MatPaginator; };
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {    
     this.users = this.userService.getAll();   
     this.dataSource = new MatTableDataSource<User>(this.users);  
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
