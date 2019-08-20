import {Injectable} from '@angular/core';
import {URL_BASE} from '../app.constantes';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Municipio} from '../model/municipio';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  constructor(private http: HttpClient) { }

  buscarTodos(uf: string) {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    const options = {
      headers: httpHeaders
    };

    return this.http.get<Municipio[]>(URL_BASE + '/municipios/findByUf?uf=' + uf, options).toPromise();
  }

}
