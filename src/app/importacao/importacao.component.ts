import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Mock} from 'protractor/built/driverProviders';
import {Mocks} from '../model/mocks';
import {ImportacaoService} from '../services/importacao.service';

@Component({
  selector: 'app-importacao',
  templateUrl: './importacao.component.html',
  styleUrls: ['./importacao.component.scss']
})
export class ImportacaoComponent implements OnInit {

  public importacaoForm: FormGroup;
  public states;
  public types;
  public months;
  public years;
  public showLoading: boolean;
  public finalizou: boolean;
  public finalizouComErro: boolean;

  constructor( private importacaoService: ImportacaoService) {
    this.states = Mocks.states;
    this.months = Mocks.months;
    this.years = Mocks.years;
    this.types = Mocks.types;
    this.showLoading = false;
    this.finalizou = false;
    this.finalizouComErro = false;
  }

  ngOnInit() {
    this.limparForm();
    this.importacaoForm.clearValidators();
  }

  limparForm() {
    this.importacaoForm = new FormGroup({
      'estado': new FormControl( null, [ Validators.required]),
      'mes':    new FormControl( null, [ Validators.required]),
      'ano':    new FormControl(null , [ Validators.required]),
      'tipoArquivo': new FormControl(null, [ Validators.required])
    });
    this.showLoading = false;
    this.finalizou = false;
    this.finalizouComErro = false;

  }

  save() {
    this.showLoading = true;

    const estado = this.importacaoForm.controls['estado'].value;
    const mes = this.importacaoForm.controls['mes'].value;
    const ano = this.importacaoForm.controls['ano'].value;
    const tipoArquivo = this.importacaoForm.controls['tipoArquivo'].value;

    this.importacaoService.importar(estado, mes, ano.substring(2, 4), tipoArquivo).then( value => {
      this.showLoading = false;
      this.finalizou = true;
      this.limparForm();
    }).catch(reason => {
      console.log(reason);
      this.showLoading = false;
      this.finalizouComErro = true;
    });

  }
}
