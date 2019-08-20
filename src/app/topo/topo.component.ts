import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {Formulario} from '../app.formulario';
import {interval} from 'rxjs';
import {KEY_AUTH_STORAGE, TEMPO_MIN_NOTIFICACAO} from '../app.constantes';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit( ) {

  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }
}
