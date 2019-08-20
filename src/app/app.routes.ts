import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './_guards/auth.guard';
import {ROLE_ADMIN, ROLE_USER} from './app.constantes';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ImportacaoComponent} from './importacao/importacao.component';

export const ROTAS: Routes = [
  {path: 'importacao', component: ImportacaoComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent},
];
