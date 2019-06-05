import { Component, OnInit, ViewChild } from '@angular/core';
import { MedicionGeneral } from '../../model/medicion-general';
import { AuthService } from '../../service/auth.service';
import { MedicionGeneralService } from '../../service/medicion-general.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatFormField} from '@angular/material/form-field';
import {MatTableModule, MatInputModule} from '@angular/material';
import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-mediciongeneral',
  templateUrl: './mediciongeneral.component.html',
  styleUrls: ['./mediciongeneral.component.sass']
})
export class MediciongeneralComponent implements OnInit {
  displayedColumns: string[] = ['Fecha',
    'pesoideal', 'pesoactual', 'brazo',
     'cintura', 'cadera', 'icc', 'imc',
    'porcentajegrasas',  'tensionmax',  'tensionmin' ];
    mediconesgenerales: MedicionGeneral [];
    dataSource;
    @ViewChild(MatSort) sort: MatSort;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private authService: AuthService,
              private medicongeneralService: MedicionGeneralService, private router: ActivatedRoute, private mattable: MatTableModule) { }

  ngOnInit() {

    this.medicongeneralService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(
      mediciones => this.dataSource = new MatTableDataSource(mediciones)
    );

  }
   spy(): void {
    this.medicongeneralService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(
      mediciones => console.log(mediciones)
    );
   }

}
