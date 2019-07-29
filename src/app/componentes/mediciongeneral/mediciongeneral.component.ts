import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { MedicionGeneral } from '../../model/medicion-general';
import { AuthService } from '../../service/auth.service';
import { MedicionGeneralService } from '../../service/medicion-general.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatFormField} from '@angular/material/form-field';
import {MatTableModule, MatInputModule, MatBottomSheet} from '@angular/material';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { MedicionGeneralFormComponent } from './medicion-general-form/medicion-general-form.component';
import { BaseChartDirective, Label, Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Grafica1Component } from './grafica1/grafica1.component';


@Component({
  selector: 'app-mediciongeneral',
  templateUrl: './mediciongeneral.component.html',
  styleUrls: ['./mediciongeneral.component.sass']
})
export class MediciongeneralComponent implements OnInit {

  public chart: BaseChartDirective;
  displayedColumns: string[] = ['Fecha',
    'pesoideal', 'pesoactual', 'brazo',
     'cintura', 'cadera', 'icc', 'imc',
    'porcentajegrasas',  'tensionmax',  'tensionmin' ];
    mediconesgenerales: MedicionGeneral [];
    dataSource;
    @ViewChild(MatSort) sort: MatSort;
  lineChartLabels: Label[] = [];
  lineChartData: ChartDataSets[] = [{data: [], label: 'Peso Actual'},
 {data: [ ] , label: 'Tension min'},
 {data: [ ] , label: 'Tension max '},
 {data: [ ] , label: 'ICC'},
 {data: [ ] , label: 'IMC'},
 {data: [ ] , label: 'Cintura'},
 {data: [ ] , label: 'Cadera'},
 {data: [ ] , label: '%Grasas'}];
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
              private medicongeneralService: MedicionGeneralService, private router: ActivatedRoute, private mattable: MatTableModule,
              private matBottonSheet: MatBottomSheet) { }

  ngOnInit() {

    this.medicongeneralService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(
      mediciones => this.dataSource = new MatTableDataSource(mediciones));
    this.medicongeneralService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(mediciones => {

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
spy(): void {
    this.medicongeneralService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(
      mediciones => console.log(mediciones)
    );
    console.log(this.chart + 'el chart');
   }

openBottonSheet( idSelect: any ): void {
    console.log(JSON.stringify(idSelect) + ' el id select');
    const refe = this.matBottonSheet.open(MedicionGeneralFormComponent, {data: { id: [idSelect.id] ,
      isNew : false, idpaciente: Number(this.router.snapshot.paramMap.get('id'))}});
    refe.afterDismissed().subscribe( response =>
      this.medicongeneralService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(respuesta =>{
        this.dataSource = new MatTableDataSource(respuesta);
        this.updateChart();
  }));
}

openNewBottonSheet(): void {
    const refe = this.matBottonSheet.open(MedicionGeneralFormComponent,
      {data: {isNew: true, idpaciente: Number(this.router.snapshot.paramMap.get('id'))}});
    refe.afterDismissed().subscribe( response =>
      this.medicongeneralService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(respuesta =>{
        this.dataSource = new MatTableDataSource(respuesta) ;
        this.updateChart();
      } ));

  }


public updateChart(): void {
    this.medicongeneralService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(mediciones => {

      const pesoactualdata: number[] = [ ];
      const tennsionmmindata: number [] = [];
      const tensionmaxdata: number [] = [];
      const porcentajegrasasdata: number [] = [];
      const imcdata: number [] = [];
      const iccdata: number [] = [];
      const cinturadata: number[] = [];
      const caderadata: number [] = [];
      this.lineChartLabels.length = 0;


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
