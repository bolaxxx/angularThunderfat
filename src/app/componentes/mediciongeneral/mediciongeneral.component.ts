import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { MedicionGeneral } from '../../model/medicion-general';
import { AuthService } from '../../service/auth.service';
import { MedicionGeneralService } from '../../service/medicion-general.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatFormField} from '@angular/material/form-field';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
export class MediciongeneralComponent implements OnInit,OnChanges {
 

  public chart: BaseChartDirective;
  displayedColumns: string[] = ['Fecha',
    'pesoideal', 'pesoactual', 'brazo',
     'cintura', 'cadera', 'icc', 'imc',
    'porcentajegrasas',  'tensionmax',  'tensionmin' ];
    @Input() mediciones: MedicionGeneral [];
    dataSource;
    @ViewChild(MatSort) sort: MatSort;
    @Output()medicionSelect = new EventEmitter<MedicionGeneral>();
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private authService: AuthService,
              private medicongeneralService: MedicionGeneralService, private mattable: MatTableModule
              ) { }

  ngOnInit() {
this.dataSource = new MatTableDataSource(this.mediciones);

  }

selecionarMedicion(medicion: MedicionGeneral): void {
  this.medicionSelect.emit(medicion);
}


ngOnChanges(changes:SimpleChanges): void {
  console.log(changes);
  if ( changes.mediciones.isFirstChange()){
    this.dataSource= new MatTableDataSource(changes.mediciones.currentValue);

  }else{
    this.dataSource= new MatTableDataSource(changes.mediciones.currentValue);
  }
}
}
