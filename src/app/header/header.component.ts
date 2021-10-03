
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy, AfterContentInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy{
  
  title = 'a-creative';
  showToolBar;
  userService: UserService = new UserService();


  mobileQuery: MediaQueryList;

  fillerNav = [
    {item: "Inicio", path: "."},
    {item: "Alunos", path: "."},
    {item: "Exercícios", path: "."},
    {item: "Agenda", path: "."}, "_________",
    {item: "Usuários", path: "/users"}];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private cookieService: CookieService, private authService: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);  
  }
 
  ngOnInit() { 
    
    if (!localStorage.getItem('usersArray')) {
      this.userService.setUser();          
    }
  }
 

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout(){
    this.authService.logout();
  }

  
}
