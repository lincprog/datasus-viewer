import {Component} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public isLogged = false;

  constructor( private authenticationService: AuthenticationService) {

  }

  public onActivate(event: any) {
    this.isLogged = this.authenticationService.isLogged();
    // this.user = this.authenticationService.currentUser();

  }

}

