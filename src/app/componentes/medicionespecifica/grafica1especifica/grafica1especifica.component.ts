import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { MedicionespecificaService } from '../../../service/medicionespecifica.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-grafica1especifica',
  templateUrl: './grafica1especifica.component.html',
  styleUrls: ['./grafica1especifica.component.sass']
})
export class Grafica1especificaComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [{data: [], label: 'Grasas Ideales Min'},
  {data: [ ] , label: 'Grasas Ideales Max'},
  {data: [ ] , label: 'Grasa Visceral'},
  {data: [ ] , label: 'Grasas'},
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
    private medicionEspecificaService: MedicionespecificaService) { }

  ngOnInit() {
    this.medicionEspecificaService.getMedciones(1).subscribe(mediciones => {
      const grasasidmindata: number[] = [ ];
      const grasasidmaxdata: number [] = [];
      const grasavisceraldata: number [] = [];
      const porcentajegrasasdata: number [] = [];
      const grasasdata: number [] = [];

      mediciones.forEach(medicion => {
  console.log(medicion.fecha.toString() + 'medicion individual ');
  grasasidmaxdata.push(medicion.grasaidmax);
  grasasidmindata.push(medicion.grasasidmin);
  grasavisceraldata.push(medicion.grasavisceral);
  porcentajegrasasdata.push(medicion.porcentajegrasa);
  grasasdata.push(medicion.grasas);
  this.lineChartLabels.push(medicion.fecha.toString());
});
      console.log(this.lineChartData.toString() + 'antes de asignar');
      this.lineChartData[0].data = grasasidmindata;
      this.lineChartData[1].data = grasasidmaxdata;
      this.lineChartData[2].data = grasavisceraldata;
      this.lineChartData[3].data = grasasdata;
      this.lineChartData[4].data = porcentajegrasasdata;
      console.log(this.lineChartData.toString() + 'despues de asignar');
});
  }

}
