import { Component, OnInit, ViewChild } from '@angular/core';
import { FiltroalimentarioService } from '../service/filtroalimentario.service';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatTableModule, MatSort, MatTableDataSource } from '@angular/material';
import { FiltroalimentarioformComponent } from './filtroalimentarioform/filtroalimentarioform.component';
import { FiltroAlimentario } from '../model/filtro-alimentario';

@Component({
  selector: 'app-filtroalimentario',
  templateUrl: './filtroalimentario.component.html',
  styleUrls: ['./filtroalimentario.component.sass']
})
export class FiltroalimentarioComponent implements OnInit {
  displayedColumns: string[] = ['Nombre',
  'Descripcion' ];
  filtros: FiltroAlimentario [];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private authService: AuthService, private mattable: MatTableModule,
              private filtroService: FiltroalimentarioService, private route: ActivatedRoute,
              public dialog: MatDialog) { }

  ngOnInit() {

    this.filtroService.getFiltrosNutricionista(this.authService.getusuario().id).subscribe(
      filtros=> this.dataSource = new MatTableDataSource(filtros));
  }

  openDialog(){
    const dialogRef = this.dialog.open(FiltroalimentarioformComponent, {
      width: '850px',
      autoFocus: true,
      data: {isNew: true}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.filtroService.getFiltrosNutricionista(this.authService.getusuario().id).subscribe(
        filtros=> this.dataSource = new MatTableDataSource(filtros));
    });
  }
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
     // this.filtroService.getFiltrosNutricionista(this.authService.getusuario().id).subscribe(respuesta =>{
       // this.dataSource = new MatTableDataSource(respuesta);
    //});

  }
  openDetails(selected: any ){
    const dialogRef = this.dialog.open(FiltroalimentarioformComponent, {
      width: '850px',
      autoFocus: true,
      data: {isNew: false,
            id: selected.id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.filtroService.getFiltrosNutricionista(this.authService.getusuario().id).subscribe(
        filtros=> this.dataSource = new MatTableDataSource(filtros));
    });
  }
}





