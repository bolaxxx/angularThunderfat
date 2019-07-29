import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { MedicionespecificaService } from '../../service/medicionespecifica.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule, MatBottomSheet, MatSort, MatTableDataSource } from '@angular/material';
import { BaseChartDirective, Label, Color } from 'ng2-charts';
import { MedicionEspecifica } from '../../model/medicion-especifica';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { MedicionespecificaformComponent } from './medicionespecificaform/medicionespecificaform.component';

@Component({
  selector: 'app-medicionespecifica',
  templateUrl: './medicionespecifica.component.html',
  styleUrls: ['./medicionespecifica.component.sass']
})
export class MedicionespecificaComponent implements OnInit {
  public chart: BaseChartDirective;
  displayedColumns: string[] = ['Fecha',
    'porcentajegrasas', 'metabolismo', 'edadmet',
     'masaosea', 'musculo', 'porcentajeagua' ];
    mediconesespecificas: MedicionEspecifica [];
    dataSource;
    @ViewChild(MatSort) sort: MatSort;
  lineChartLabels: Label[] = [];
  lineChartData: ChartDataSets[] = [{data: [], label: 'Grasas Id Min'},
 {data: [ ] , label: 'Grasas Id Max'},
 {data: [ ] , label: 'Grasas Visceral'},
 {data: [ ] , label: 'Grasas'},
 {data: [ ] , label: '%Grasas'}];
 lineChartData2: ChartDataSets[] = [{data: [], label: 'Musculo'},
 {data: [ ] , label: 'Musculo Id Max'},
 {data: [ ] , label: 'Musculo Id Min'},
 {data: [ ] , label: 'Poxmus Max'},
 {data: [ ] , label: 'Poxmus Min'},
 {data: [ ] , label: 'Masa Osea'}];
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
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private authService: AuthService,
              private medicionespecificaService: MedicionespecificaService,
              private router: ActivatedRoute, private mattable: MatTableModule,
              private matBottonSheet: MatBottomSheet) { }

  ngOnInit() {
  this.medicionespecificaService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(
    mediciones => this.dataSource = new MatTableDataSource(mediciones));
  this.medicionespecificaService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(mediciones => {

  const grasasidmaxdata: number[] = [ ];
  const grasasidmindata: number [] = [];
  const grasasvisceraldata: number[] = [];
  const grasasdata: number [] = [];
  const porcentajegrasasdata: number [] = [];
  const musculodata: number [] = [];
  const musculoidmaxdata: number [] = [];
  const musculoidmindata: number[] = [];
  const poxmusmaxdata: number [] = [];
  const poxmusmindata: number[] = [];
  const masaoseadata: number [] = [];
  mediciones.forEach(medicion => {
console.log(medicion.fecha.toString() + 'medicion individual ');
console.log(medicion.id + ' id');
grasasidmaxdata.push(medicion.grasaidmax);
grasasidmindata.push(medicion.grasasidmin);
grasasvisceraldata.push(medicion.grasavisceral);
grasasdata.push(medicion.grasas);
musculodata.push(medicion.musculo);
musculoidmaxdata.push(medicion.musculoidmax);
musculoidmindata.push(medicion.musculoidmin);
poxmusmaxdata.push(medicion.poxmusmax);
poxmusmindata.push(medicion.poxmusmin);
masaoseadata.push(medicion.masaosea);
porcentajegrasasdata.push(medicion.porcentajegrasa);
this.lineChartLabels.push(medicion.fecha.toString());
});


  console.log(this.lineChartData.toString() + 'antes de asignar');
  this.lineChartData[0].data = grasasidmindata;
  this.lineChartData[1].data = grasasidmaxdata;
  this.lineChartData[2].data = grasasvisceraldata;
  this.lineChartData[3].data = grasasdata;
  this.lineChartData[4].data = porcentajegrasasdata;

  this.lineChartData2[0].data = musculodata;
  this.lineChartData2[1].data = musculoidmaxdata;
  this.lineChartData2[2].data = musculoidmindata;
  this.lineChartData2[3].data = poxmusmaxdata;
  this.lineChartData2[4].data = poxmusmindata;
  this.lineChartData2[5].data = masaoseadata;
  console.log(this.lineChartData.toString() + 'despues de asignar');
   });
}
spy(): void {
  this.medicionespecificaService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(
    mediciones => console.log(mediciones)
  );
  console.log(this.chart + 'el chart');
 }

openBottonSheet( idSelect: any ): void {
  console.log(JSON.stringify(idSelect) + ' el id select');
  const refe = this.matBottonSheet.open(MedicionespecificaformComponent, {data: { id: [idSelect.id] ,
    isNew : false, idpaciente: Number(this.router.snapshot.paramMap.get('id'))}});
  refe.afterDismissed().subscribe( response =>
    this.medicionespecificaService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(respuesta => {
      this.dataSource = new MatTableDataSource(respuesta);
      this.updateChart();
}));
}

openNewBottonSheet(): void {
  const refe = this.matBottonSheet.open(MedicionespecificaformComponent,
    {data: {isNew: true, idpaciente: Number(this.router.snapshot.paramMap.get('id'))}});
  refe.afterDismissed().subscribe( response =>
    this.medicionespecificaService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(respuesta => {
      this.dataSource = new MatTableDataSource(respuesta) ;
      this.updateChart();
    } ));

}


public updateChart(): void {
  this.lineChartLabels = [];
  this.medicionespecificaService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(mediciones => {

    const grasasidmaxdata: number[] = [ ];
    const grasasidmindata: number [] = [];
    const grasasvisceraldata: number[] = [];
    const grasasdata: number [] = [];
    const porcentajegrasasdata: number [] = [];
    const musculodata: number [] = [];
    const musculoidmaxdata: number [] = [];
    const musculoidmindata: number[] = [];
    const poxmusmaxdata: number [] = [];
    const poxmusmindata: number[] = [];
    const masaoseadata: number [] = [];
    mediciones.forEach(medicion => {
console.log(medicion.fecha.toString() + 'medicion individual ');
console.log(medicion.id + ' id');
grasasidmaxdata.push(medicion.grasaidmax);
grasasidmindata.push(medicion.grasasidmin);
grasasvisceraldata.push(medicion.grasavisceral);
grasasdata.push(medicion.grasas);
musculodata.push(medicion.musculo);
musculoidmaxdata.push(medicion.musculoidmax);
musculoidmindata.push(medicion.musculoidmin);
poxmusmaxdata.push(medicion.poxmusmax);
poxmusmindata.push(medicion.poxmusmin);
masaoseadata.push(medicion.masaosea);
porcentajegrasasdata.push(medicion.porcentajegrasa);
this.lineChartLabels.push(medicion.fecha.toString());
});


    console.log(this.lineChartData.toString() + 'antes de asignar');
    this.lineChartData[0].data = grasasidmindata;
    this.lineChartData[1].data = grasasidmaxdata;
    this.lineChartData[2].data = grasasvisceraldata;
    this.lineChartData[3].data = grasasdata;
    this.lineChartData[4].data = porcentajegrasasdata;

    this.lineChartData2[0].data = musculodata;
    this.lineChartData2[1].data = musculoidmaxdata;
    this.lineChartData2[2].data = musculoidmindata;
    this.lineChartData2[3].data = poxmusmaxdata;
    this.lineChartData2[4].data = poxmusmindata;
    this.lineChartData2[5].data = masaoseadata;
    console.log(this.lineChartData.toString() + 'despues de asignar');
   });

}

}
