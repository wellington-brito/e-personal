
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './users/user.service';
import { AuthService } from './services/auth.service';
import { CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
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
    this.userService.setUser();     
    this.checkUserHash();
  }
  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout(){
    this.authService.logout();
    this.checkUserHash();
  }

  async checkUserHash(){
    if (await localStorage.getItem("userHash") !== null) {
      this.showToolBar = true;      
      console.log(this.showToolBar)
    }else{
      this.showToolBar = false;      
    }
  }
 

}
