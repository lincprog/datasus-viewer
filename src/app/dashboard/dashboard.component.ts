import {Component, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {Formulario} from '../app.formulario';
import {DatePipe} from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';
import {CnesService} from '../services/cnes.service';
import {EstadoService} from '../services/estado.service';
import {Estado} from '../model/estado';
import {MunicipioService} from '../services/municipio.service';
import {Municipio} from '../model/municipio';
import {Cbo} from '../model/cbo';
import {AgrupamentoDto} from '../model/agrupamento-dto';
import {ExcelOutputService} from '../services/excel-output-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  extends Formulario implements OnInit {

  @ViewChild('lineChart') private chartRef;
  chart: any;

  public dashboardSearchForm: FormGroup;

  //////////// INICIO DATA
  dataInicio: Date;
  dataFim: Date;
  private today = new Date();
  dataInicioString: string;
  dataFimString: string;

  // GRAFICO CNES
  colunas = '';
  municipios = null;
  cbos = null;
  labelsChart = [];
  valuesChart = [];
  backgroundColors = [];
  estados: Estado[];
  municipiosLista: Municipio[];
  ufSelecionada = null;
  cbosLista = null;
  //////////// FIM DATA

  constructor(private datePipe: DatePipe, private cnesService: CnesService,
              private estadoService: EstadoService,
              private municipioService: MunicipioService,
              private excelOutputService: ExcelOutputService) {
    super();
    this.limparForm();
    this.carregarComboEstados();
    this.cbosLista = Cbo.cbos;
  }

  ngOnInit() {

    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'pie',
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [],
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: true,
          labels: {
            fontColor: '#333',
            fontSize: 9
          }
        },
      }
    });

  }

  consultarInformacoes() {
    this.limparListas();

    this.colunas = this.dashboardSearchForm.controls['colunasSelecionadas'].value;
    if (!this.colunas) {
      alert('Escolha as colunas para agrupar');
      return;
    }

    this.municipios = this.dashboardSearchForm.controls['municipioSelecionado'].value;
    if (this.municipios == null || this.municipios[0] == null) {
      this.municipios = null;
    }

    this.cbos = this.dashboardSearchForm.controls['cboSelecionado'].value;
    if (this.cbos == null || this.cbos[0] == null) {
      this.cbos = null;
    }

    this.ufSelecionada = this.dashboardSearchForm.controls['estadoSelecionado'].value;
    const isSUS  = this.dashboardSearchForm.controls['isSUS'].value;
    const notIsSUS = this.dashboardSearchForm.controls['notIsSUS'].value;

    this.cnesService.agruparInformacoes(this.colunas, this.municipios, this.ufSelecionada, this.cbos, isSUS, notIsSUS).then(value => {
      // console.log(value);
      this.montarLabels(value);
    });
  }

  montarLabels(value: any) {

    for (const c of value) {
      this.labelsChart.push(this.criarLabel(c));
      this.valuesChart.push(c.contador);
      this.backgroundColors.push(this.gerarBackgroundRandom());
    }

    this.atualizarGrafico();
  }

  criarLabel(tupla: any) {
    let label = '';
    const agrupadoresEscolhidos = this.dashboardSearchForm.controls['colunasSelecionadas'].value;
    for (const c of agrupadoresEscolhidos) {
      label = label + tupla[c] + ' / ' ;
    }

    return label;
  }

  gerarBackgroundRandom(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  atualizarGrafico() {
    this.chart.data.datasets[0].data = this.valuesChart;
    this.chart.data.datasets[0].backgroundColor = this.backgroundColors;
    this.chart.data.labels = this.labelsChart;
    this.chart.update();
  }

  carregarComboEstados() {
    this.estadoService.buscarTodos().then((value: Estado[]) => {
      this.estados = value;
    }).catch(reason => {console.log('erro ao buscar unidades'); } );
  }

  limparForm() {
    this.dashboardSearchForm = new FormGroup({
      'dataInicio': new FormControl(''),
      'dataFim': new FormControl(''),
      'estadoSelecionado': new FormControl(null),
      'municipioSelecionado': new FormControl(null),
      'cboSelecionado': new FormControl(null),
      'colunasSelecionadas': new FormControl(''),
      'isSUS': new FormControl(false),
      'notIsSUS': new FormControl(false)
    });
  }

  limparListas() {
    this.chart.data.datasets[0].data = [];
    this.backgroundColors = [];
    this.labelsChart = [];
    this.valuesChart = [];
    this.municipios = null;
  }

  carregarMunicipios() {
    this.dashboardSearchForm.controls['municipioSelecionado'].reset();
    const uf = this.dashboardSearchForm.controls['estadoSelecionado'].value;
    this.municipioService.buscarTodos(uf).then(value => {
      // console.log(value);
      this.municipiosLista = value;
    });
  }

  exportarExcel() {

    if ( this.labelsChart.length <= 0 && this.valuesChart.length <= 0) {
      alert('Nenhum gráfico foi gerado');
      return;
    }

    const agrupamentoDto = new AgrupamentoDto();
    agrupamentoDto.labels = this.labelsChart;
    agrupamentoDto.values = this.valuesChart;
    this.excelOutputService.downloadExcelManifestacaoPorTipo(agrupamentoDto).then(value => {
      this.downLoadFile(value, 'application/vnd.ms-excel');
    });
  }

  downLoadFile(data: any, type: string) {
    const blob = new Blob([data], {type: type});
    const url = window.URL.createObjectURL(blob);
    const pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
  }
}
