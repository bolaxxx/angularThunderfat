import { Component, OnInit, ViewChild } from '@angular/core';
import { MedicionSegmental } from '../../model/medicion-segmental';
import { MatSort, MatTableModule, MatBottomSheet, MatTableDataSource } from '@angular/material';
import { MedicionsegmentalService } from '../../service/medicionsegmental.service';
import { AuthService } from 'src/app/service/auth.service';
import { ActivatedRoute } from '@angular/router';
import { MedicionSegmentalFormComponent } from './medicion-segmental-form/medicion-segmental-form.component';

@Component({
  selector: 'app-medicionsegmental',
  templateUrl: './medicionsegmental.component.html',
  styleUrls: ['./medicionsegmental.component.sass']
})
export class MedicionsegmentalComponent implements OnInit {
  displayedColumns: string[] = ['Fecha',
    'bdmusculo', 'bdporcentajegrasas', 'bimusculo',
     'biporcentajegrasas', 'pdmusculo', 'pdporcentajegrasas', 'pimusculo',
    'piporcentajegrasas',  'tmusculo',  'tporcentajegrasa' ];
    mediconessegmentales: MedicionSegmental [];
    dataSource;
    @ViewChild(MatSort) sort: MatSort;
  constructor(private authService: AuthService,
              private medicongeneralService: MedicionsegmentalService, private router: ActivatedRoute, private mattable: MatTableModule,
              private matBottonSheet: MatBottomSheet) { }

  ngOnInit() {
    this.medicongeneralService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(
      mediciones => this.dataSource = new MatTableDataSource(mediciones));
  }
  openBottonSheet( idSelect: any ): void {
    console.log(JSON.stringify(idSelect) + ' el id select');
    const refe = this.matBottonSheet.open(MedicionSegmentalFormComponent, {data: { id: [idSelect.id] ,
      isNew : false, idpaciente: Number(this.router.snapshot.paramMap.get('id'))}});
    refe.afterDismissed().subscribe( response =>
      this.medicongeneralService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(respuesta =>{
        this.dataSource = new MatTableDataSource(respuesta);
        console.log('llego al dissmis');

  }));
}

openNewBottonSheet(): void {
    const refe = this.matBottonSheet.open(MedicionSegmentalFormComponent,
      {data: {isNew: true, idpaciente: Number(this.router.snapshot.paramMap.get('id'))}});
    refe.afterDismissed().subscribe( response =>
      this.medicongeneralService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(respuesta =>{
        this.dataSource = new MatTableDataSource(respuesta) ;
        console.log('llego al dissmis'+ respuesta);
      } ));

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
