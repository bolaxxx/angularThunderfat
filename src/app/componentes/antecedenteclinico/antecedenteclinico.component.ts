import { Component, OnInit, ViewChild, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AntecedenteClinicos } from '../../model/antecedente-clinicos';
import { AntecedenteclinicoService } from '../../service/antecedenteclinico.service';
import { MatSort, MatTableModule, MatBottomSheet, MatTableDataSource } from '@angular/material';
import { AuthService } from 'src/app/service/auth.service';
import { ActivatedRoute } from '@angular/router';
import { MedicionSegmentalFormComponent } from '../medicionsegmental/medicion-segmental-form/medicion-segmental-form.component';
import { AntecedenteclinicoformComponent } from './antecedenteclinicoform/antecedenteclinicoform.component';

@Component({
  selector: 'app-antecedenteclinico',
  templateUrl: './antecedenteclinico.component.html',
  styleUrls: ['./antecedenteclinico.component.sass']
})
export class AntecedenteclinicoComponent implements OnInit, OnChanges {

  displayedColumns: string[] = ['Fecha',
  'antecedente' ];
  @Input() antecedentes: AntecedenteClinicos [];
  @Output() antecedenteclinicoSelecionado = new EventEmitter<AntecedenteClinicos>();
  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private mattable: MatTableModule,
             ) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.antecedentes);
  }
  seleccionarAntecedente( idSelect: AntecedenteClinicos ): void {
    this.antecedenteclinicoSelecionado.emit(idSelect);
}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.antecedentes.isFirstChange()){
      this.dataSource= new MatTableDataSource(changes.antecedentes.currentValue);
    }else{
      this.dataSource= new MatTableDataSource(changes.antecedentes.currentValue);
    }
  }
}
