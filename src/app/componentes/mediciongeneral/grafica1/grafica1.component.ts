import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MedicionGeneral } from '../../../model/medicion-general';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import { AuthService } from '../../../service/auth.service';
import { MedicionGeneralService } from '../../../service/medicion-general.service';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.sass']
})
export class Grafica1Component implements OnInit {
  public lineChartData: ChartDataSets[] = [{data: [], label: 'Peso Actual'},
{data: [ ] , label: 'Tension min'},
{data: [ ] , label: 'Tension max '},
{data: [ ] , label: 'ICC'},
{data: [ ] , label: 'IMC'},
{data: [ ] , label: 'Cintura'},
{data: [ ] , label: 'Cadera'},
{data: [ ] , label: '%Grasas'}];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions = {
    responsive: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  constructor(
    private authserv: AuthService,
    private medicionGeneralService: MedicionGeneralService
  ) {}
  ngOnInit(): void {

    this.medicionGeneralService.getMedciones(1).subscribe(mediciones => {
            const pesoactualdata: number[] = [ ];
            const tennsionmmindata: number [] = [];
            const tensionmaxdata: number [] = [];
            const porcentajegrasasdata: number [] = [];
            const imcdata: number [] = [];
            const iccdata: number [] = [];
            const cinturadata: number[] = [];
            const caderadata: number [] = [];

            mediciones.forEach(medicion => {
        console.log(medicion.fecha.toString() + 'medicion individual ');
        console.log(medicion.tensionmax + ' tension maxima');
        pesoactualdata.push(medicion.pesoactual);
        tennsionmmindata.push(medicion.tensionmin);
        tensionmaxdata.push(medicion.tensionmax);
        console.log(medicion.imc + 'el imc ');
        imcdata.push(medicion.imc);
        iccdata.push(medicion.icc);
        cinturadata.push(medicion.cintura);
        caderadata.push(medicion.cadera);
        porcentajegrasasdata.push(medicion.porcentajegrasas);
        this.lineChartLabels.push(medicion.fecha.toString());
      });
            console.log(this.lineChartData.toString() + 'antes de asignar');
            console.log(imcdata + ' imc data');
            this.lineChartData[0].data = pesoactualdata;
            this.lineChartData[1].data = tennsionmmindata;
            this.lineChartData[2].data = tensionmaxdata;
            this.lineChartData[3].data = iccdata;
            this.lineChartData[4].data = imcdata;
            this.lineChartData[5].data = cinturadata;
            this.lineChartData[6].data = caderadata;
            this.lineChartData[7].data = porcentajegrasasdata;
            console.log(this.lineChartData.toString() + 'despues de asignar');
    });
  }
}
