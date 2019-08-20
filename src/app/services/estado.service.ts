import {Injectable} from '@angular/core';
import {URL_BASE} from '../app.constantes';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Estado} from '../model/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) { }

  buscarTodos() {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    const options = {
      headers: httpHeaders
    };

    return this.http.get<Estado[]>(URL_BASE + '/estados', options).toPromise();
  }

}
