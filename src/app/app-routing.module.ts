import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { FormComponent } from './form/form.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [ 
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuardService] },
  { path: 'editUser', component: FormComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService],
})
export class AppRoutingModule { }
