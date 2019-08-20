import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {KEY_AUTH_STORAGE, KEY_ROLES_STORAGE, URL_BASE} from '../app.constantes';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${URL_BASE}/token/generate-token`, { username, password })
      .pipe(map(auth => {
        // login successful if there's a jwt token in the response
        if (auth && auth.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem(KEY_AUTH_STORAGE, JSON.stringify(auth));
          let permissoes = '';
          const roles = auth.usuario.roles;
          // console.log(roles);
          for (let i = 0 ;  i < roles.length; i++ ) {
            permissoes = permissoes + (roles[i].name) + ',';
          }
          localStorage.setItem(KEY_ROLES_STORAGE, permissoes);
          // console.log(auth);
        }
        return auth;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.clear();
  }

  isLogged() {
    if (localStorage.getItem(KEY_AUTH_STORAGE)) {
      return true;
    }
    return false;
  }

}
