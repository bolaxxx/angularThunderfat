import { Component, OnInit, ViewChild } from '@angular/core';
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
export class AntecedentetratamientoComponent implements OnInit {
  displayedColumns: string[] = ['Fecha',
    'antecedente' ];
    antecedentes: AntecedenteTratamiento [];
    dataSource;
    @ViewChild(MatSort) sort: MatSort;
  constructor(private authService: AuthService,
              private medicongeneralService: AntecedentetratamientoService, private router: ActivatedRoute,
              private mattable: MatTableModule,
              private matBottonSheet: MatBottomSheet) { }

  ngOnInit() {
    this.medicongeneralService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(
      mediciones => this.dataSource = new MatTableDataSource(mediciones));
  }
  openBottonSheet( idSelect: any ): void {
    console.log(JSON.stringify(idSelect) + ' el id select');
    const refe = this.matBottonSheet.open(AntecedentetratamientoformComponent, {data: { id: [idSelect.id] ,
      isNew : false, idpaciente: Number(this.router.snapshot.paramMap.get('id'))}});
    refe.afterDismissed().subscribe( response =>
      this.medicongeneralService.getMedciones(Number(this.router.snapshot.paramMap.get('id'))).subscribe(respuesta =>{
        this.dataSource = new MatTableDataSource(respuesta);
        console.log('llego al dissmis');

  }));
}

openNewBottonSheet(): void {
    const refe = this.matBottonSheet.open(AntecedentetratamientoformComponent,
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
