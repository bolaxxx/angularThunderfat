import { Component, OnInit, ViewChild, Output, Input, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { AntecedentetratamientoService } from '../../service/antecedentetratamiento.service';
import { MedicionSegmental } from 'src/app/model/medicion-segmental';
import { MatSort, MatTableModule, MatBottomSheet, MatTableDataSource } from '@angular/material';
import { AuthService } from 'src/app/service/auth.service';
import { ActivatedRoute } from '@angular/router';
import { MedicionSegmentalFormComponent } from '../medicionsegmental/medicion-segmental-form/medicion-segmental-form.component';
import { AntecedenteTratamiento } from '../../model/antecedente-tratamiento';
import { AntecedentetratamientoformComponent } from './antecedentetratamientoform/antecedentetratamientoform.component';

@Component({
  selector: 'app-antecedentetratamiento',
  templateUrl: './antecedentetratamiento.component.html',
  styleUrls: ['./antecedentetratamiento.component.sass']
})
export class AntecedentetratamientoComponent implements OnInit, OnChanges {

  displayedColumns: string[] = ['Fecha',
    'antecedente' ];
   @Input() antecedentes: AntecedenteTratamiento [];
    dataSource;
    @Output()antecedenteSelecionado = new EventEmitter<AntecedenteTratamiento>();
    @ViewChild(MatSort) sort: MatSort;
  constructor(
              private mattable: MatTableModule,
              private matBottonSheet: MatBottomSheet) { }

  ngOnInit() {
   this.dataSource = new MatTableDataSource(this.antecedentes);
  }
  selecionarantecedente( idSelect: AntecedenteTratamiento ): void {
    this.antecedenteSelecionado.emit(idSelect);
}


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.antecedentes.isFirstChange()){
      this.dataSource = new MatTableDataSource(changes.antecedentes.currentValue);
    }else{
      this.dataSource = new MatTableDataSource(changes.antecedentes.currentValue);
    }

  }
}
