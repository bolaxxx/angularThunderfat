import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { AuthService } from 'src/app/service/auth.service';
import { MedicionsegmentalService } from '../../../service/medicionsegmental.service';
import { MedicionespecificaService } from 'src/app/service/medicionespecifica.service';

@Component({
  selector: 'app-grafica2especifica',
  templateUrl: './grafica2especifica.component.html',
  styleUrls: ['./grafica2especifica.component.sass']
})
export class Grafica2especificaComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [{data: [], label: 'Musculo'},
  {data: [ ] , label: 'Musculo Ideal Min'},
  {data: [ ] , label: 'Musuclo Ideal Max '},
  {data: [ ] , label: 'PoxMus Max'},
  {data: [ ] , label: 'PoxMus Min'},
  {data: [ ] , label: 'Masa Osea'}];
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

  constructor(private authserv: AuthService,
              private medicionSEspeficiaService: MedicionespecificaService ) { }

  ngOnInit() {
    this.medicionSEspeficiaService.getMedciones(1).subscribe(mediciones => {
      const musculodata: number[] = [ ];
      const musuclommindata: number [] = [];
      const musculomaxdata: number [] = [];
      const poxmusmindata: number [] = [];
      const poxmusmaxdata: number [] = [];
      const masaoseadata: number [] = [];
      mediciones.forEach(medicion => {

  musculodata.push(medicion.musculo);
  musuclommindata.push(medicion.musculoidmin);
  musculomaxdata.push(medicion.musculoidmax);
  poxmusmindata.push(medicion.poxmusmin);
  poxmusmaxdata.push(medicion.poxmusmax);
  masaoseadata.push(medicion.masaosea);
  this.lineChartLabels.push(medicion.fecha.toString());
});
      console.log(this.lineChartData.toString() + 'antes de asignar');
      this.lineChartData[0].data = musculodata;
      this.lineChartData[1].data = musuclommindata;
      this.lineChartData[2].data = musculomaxdata;
      this.lineChartData[3].data = poxmusmaxdata;
      this.lineChartData[4].data = poxmusmindata;
      this.lineChartData[5].data = masaoseadata;
      console.log(this.lineChartData.toString() + 'despues de asignar');
});
  }

}
