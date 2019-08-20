import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {URL_BASE} from '../app.constantes';
import {AgrupamentoDto} from '../model/agrupamento-dto';

@Injectable({
  providedIn: 'root'
})
export class ExcelOutputService {

  constructor(private http: HttpClient) {

  }

  downloadExcelManifestacaoPorTipo( agrupamentoDto: AgrupamentoDto) {

    const httpHeaders = new HttpHeaders({});

    return this.http.post(URL_BASE + '/exceloutput/downloadExcelManifestacaoPorTipo', agrupamentoDto, {
      responseType: 'arraybuffer',
      headers: httpHeaders
    }).toPromise();
  }

}
