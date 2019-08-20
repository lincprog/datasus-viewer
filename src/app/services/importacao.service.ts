import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL_BASE} from '../app.constantes';

@Injectable({
  providedIn: 'root'
})
export class ImportacaoService {

  constructor(private http: HttpClient) {

  }

  importar(estado: string, mes: string, ano: string, tipoArquivo: string) {
    return this.http.get(URL_BASE + '/importacao?' + '&estado=' + estado + '&mes=' + mes + '&ano=' + ano + '&tipoArquivo=' + tipoArquivo).toPromise();
  }

}
