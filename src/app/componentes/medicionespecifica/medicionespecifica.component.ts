import { Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { MedicionespecificaService } from '../../service/medicionespecifica.service';
import { ActivatedRoute } from '@angular/router';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { BaseChartDirective, Label, Color } from 'ng2-charts';
import { MedicionEspecifica } from '../../model/medicion-especifica';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { MedicionespecificaformComponent } from './medicionespecificaform/medicionespecificaform.component';

@Component({
  selector: 'app-medicionespecifica',
  templateUrl: './medicionespecifica.component.html',
  styleUrls: ['./medicionespecifica.component.sass']
})
export class MedicionespecificaComponent implements OnInit ,OnChanges{
  public chart: BaseChartDirective;
  displayedColumns: string[] = ['Fecha',
    'porcentajegrasas', 'metabolismo', 'edadmet',
     'masaosea', 'musculo', 'porcentajeagua' ];
    @Input() mediconesespecificas: MedicionEspecifica [];
    @Output() medicionselecionado: EventEmitter<MedicionEspecifica>;
    dataSource;
    @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private authService: AuthService,
              private medicionespecificaService: MedicionespecificaService,
              private mattable: MatTableModule,
             ) { }

  ngOnInit() {
  this.dataSource = new MatTableDataSource(this.mediconesespecificas);
}


  editarMedicion(medcionSelecionada: MedicionEspecifica ): void {
    this.medicionselecionado.emit(medcionSelecionada);
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if ( changes.mediconesespecificas.isFirstChange()){
      this.dataSource = new MatTableDataSource(changes.mediconesespecificas.currentValue);
    } else {
      this.dataSource =  new MatTableDataSource(changes.mediconesespecificas.currentValue);
    }
  }



}
