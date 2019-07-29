import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Alimento } from '../model/alimento';
import { PlatoPredeterminado } from '../model/plato-predeterminado';
import { PlatopredeterminadoformComponent } from './platopredeterminadoform/platopredeterminadoform.component';
import { MatDialogRef, MAT_DIALOG_DATA, MatAutocompleteModule,
   MatInputModule, MatDialog, MatSort, MatTableModule, MatTableDataSource } from '@angular/material';
import { AlimentoServiceService } from '../service/alimento-service.service';
import { PlatopredeterminadoService } from '../service/platopredeterminado.service';
import { AuthService } from '../service/auth.service';
import { startWith, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-platospredeterminado',
  templateUrl: './platospredeterminado.component.html',
  styleUrls: ['./platospredeterminado.component.sass']
})
export class PlatospredeterminadoComponent implements OnInit {
  displayedColumns: string[] = ['Nombre',
  'KcalTotal', 'ProteinasTotal', 'GrasasTotales', 'HidratosTotales' ];
  platos: PlatoPredeterminado [];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private authService: AuthService, private mattable: MatTableModule,
              private filtroService: PlatopredeterminadoService, private route: ActivatedRoute,
              public dialog: MatDialog ) {
  }

  ngOnInit() {
    this.filtroService.getPlatosNutricionista(this.authService.getusuario().id).subscribe(
      platos => this.dataSource = new MatTableDataSource(platos));
  }
  openDialog() {
    const dialogRef = this.dialog.open(PlatopredeterminadoformComponent, {
      width: '850px',
      autoFocus: true,
      data: {isNew: true}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.filtroService.getPlatosNutricionista(this.authService.getusuario().id).subscribe(respuesta =>{
        this.dataSource = new MatTableDataSource(respuesta);
      });
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    //this.filtroService.getPlatosNutricionista(this.authService.getusuario().id).subscribe(respuesta =>{
      //this.dataSource = new MatTableDataSource(respuesta);
  //});

}
openDetails(row: any) {
  const dialogRef = this.dialog.open(PlatopredeterminadoformComponent, {
    width: '850px',
    autoFocus: true,
    data: {isNew: false,
      id: row.id}
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.filtroService.getPlatosNutricionista(this.authService.getusuario().id).subscribe(
      filtros=> this.dataSource = new MatTableDataSource(filtros));
  });
}
}
