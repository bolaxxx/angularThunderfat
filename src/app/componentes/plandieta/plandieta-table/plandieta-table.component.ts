import { Component, OnInit, Input, ViewChild, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { MedicionGeneral } from 'src/app/model/medicion-general';
import { MatSort, MatTableModule, MatTableDataSource } from '@angular/material';
import { AuthService } from 'src/app/service/auth.service';
import { MedicionGeneralService } from 'src/app/service/medicion-general.service';
import { PlandietaService } from '../../../service/plandieta.service';
import { PlanDieta } from 'src/app/model/plan-dieta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plandieta-table',
  templateUrl: './plandieta-table.component.html',
  styleUrls: ['./plandieta-table.component.sass']
})
export class PlandietaTableComponent implements OnInit {
  public chart: BaseChartDirective;
  displayedColumns: string[] = ['Fechaini',
    'Fechafin', 'ingesta kcal diaria', 'kcal max diaria',
     'kcal min diaria', 'comidas diarias', 'reparto glucido diario', 'reparto protido diario',
    'reparto lipido diario',  'Detalle',  'Eliminar' ];
    @Input() planes: PlanDieta [];
    dataSource;
    @ViewChild(MatSort) sort: MatSort;
    @Output()medicionSelect = new EventEmitter<PlanDieta>();
    @Output()deleted =new EventEmitter<any>();
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private authService: AuthService,
              private plandietaService: PlandietaService, private mattable: MatTableModule,private router: Router,
              ) { }

  ngOnInit() {
this.dataSource = new MatTableDataSource(this.planes);

  }

selecionarMedicion(plan): void {
  console.log(JSON.stringify(plan) + 'la row');
  this.router.navigate(['plandieta/', plan.id]);
  this.medicionSelect.emit(plan);
}


ngOnChanges(changes:SimpleChanges): void {
  console.log(changes);
  if ( changes.planes.isFirstChange()){
    this.dataSource = new MatTableDataSource(changes.planes.currentValue);

  }else{
    this.dataSource = new MatTableDataSource(changes.planes.currentValue);
  }
}
deletePlan(plan:PlanDieta){
  const a =plan.id;
  this.plandietaService.borrarPLan(plan.id).subscribe(element => {console.log(element)
  this.deleted.emit(a); });
}

}
