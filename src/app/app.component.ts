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
  userService: UserService = new UserService();

  ngOnInit() {    
    this.userService.setUser();
  }

}
