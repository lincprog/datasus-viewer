import {Injectable} from '@angular/core';
import {URL_BASE} from '../app.constantes';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CnesService {

  constructor(private http: HttpClient) { }

  agruparInformacoes(colunas: string, municipios: string, uf: string, cbos: string, isSUS: string, notIsSUS: string) {
    const httpHeaders = new HttpHeaders({
      'Content-type': 'application/json',
      'Cache-Control': 'no-cache'
    });

    const options = {
      headers: httpHeaders
    };

    let parametros = 'colunas=' + colunas;

    if ( municipios ) {
      parametros = parametros + '&municipios=' + municipios;
    }

    if ( cbos ) {
      parametros = parametros + '&cbos=' + cbos;
    }

    if ( uf ) {
      parametros = parametros + '&uf=' + uf;
    }

    if ( isSUS || notIsSUS ) {
      parametros = parametros + '&isSUS=' + isSUS;
      parametros = parametros + '&notIsSUS=' + notIsSUS;
    }

    return this.http.get<any[]>(URL_BASE + '/groupingReport?' + parametros, options).toPromise();
  }

}
