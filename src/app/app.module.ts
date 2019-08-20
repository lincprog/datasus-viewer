import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {ROTAS} from './app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {ErrorInterceptor} from './_helpers/error.interceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DatePipe} from '@angular/common';
import {FlatpickrModule} from 'angularx-flatpickr';
import { ImportacaoComponent } from './importacao/importacao.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    HomeComponent,
    LoadingComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent,
    ImportacaoComponent
    // LoadingComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule, TextMaskModule,
    RouterModule.forRoot(ROTAS), FlatpickrModule.forRoot(), FormsModule
  ],
  providers: [DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
