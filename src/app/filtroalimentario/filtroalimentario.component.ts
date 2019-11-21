import { Component, OnInit, ViewChild } from '@angular/core';
import { FiltroalimentarioService } from '../service/filtroalimentario.service';
import { AuthService } from '../service/auth.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatTableModule, MatSort, MatTableDataSource } from '@angular/material';
import { FiltroalimentarioformComponent } from './filtroalimentarioform/filtroalimentarioform.component';
import { FiltroAlimentario } from '../model/filtro-alimentario';
import swal from 'sweetalert2';

@Component({
  selector: 'app-filtroalimentario',
  templateUrl: './filtroalimentario.component.html',
  styleUrls: ['./filtroalimentario.component.sass']
})
export class FiltroalimentarioComponent implements OnInit {
  filtros: FiltroAlimentario[] =[];
  isFiltroSelected: boolean ;
  filtroSelected: FiltroAlimentario;
  newFiltro: boolean;
  constructor(private authService: AuthService,
              private filtroService: FiltroalimentarioService) { }

  ngOnInit() {

    this.filtroService.getFiltrosNutricionista(this.authService.getusuario().id).subscribe(
      filtros => this.filtros = filtros);
  }

  procesaPropagar(mensaje) {
    console.log(mensaje);
    this.isFiltroSelected=false;
    this.filtroService.getFiltrosNutricionista(this.authService.getusuario().id).subscribe(
      filtros => { this.filtros = filtros;
                   this.newFiltro = false;
                   this.isFiltroSelected=false;
                
       } );


  }
  selecionarFiltro(paciente: FiltroAlimentario): void {
    console.log('paciente selecionado' + JSON.stringify(paciente));
    this.filtroSelected = paciente;
    this.newFiltro = false;
    this.isFiltroSelected = false;
    this.isFiltroSelected = true;
  }
  eliminarFiltro(paciente: FiltroAlimentario): void {
      console.log('llego al componente padre en eliminar');
      let  i = 0;
      console.log('estado del aarray filtros antes de borrar ' + JSON.stringify(this.filtros));
      while (i < this.filtros.length) {
        if (this.filtros[i].id === paciente.id) {
          console.log('entro por el if eliminar ');
          swal.fire({
            title: '¿Estas seguro que quieres eliminar al Filtro' + paciente.nombre + ' ?',
            text: 'No se podran recuperar los datos',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo '
          }).then((result) => {
            if (result.value) {
              i = this.filtros.length + 1;
              this.filtroService.borrarCita(paciente.id).subscribe(response => {
                this.filtros.splice(i, 1);
                console.log('respuesta del alert+deberia haber borrado ');
                swal.fire(
                  '¡Eliminado!',
                  'El Filtro ha sido borrado.',
                  'success'
                );
                this.filtroService.getFiltrosNutricionista(this.authService.getusuario().id)
                .subscribe(respuesta => this.filtros = respuesta);
              });
            }
          });

        }
        i++;
      }
      console.log('este es el array en el componente padre despues de eliminar ' + JSON.stringify(this.filtros));
  }
  nuevoFiltro(): void {
    this.isFiltroSelected = true;
    this.filtroSelected = new FiltroAlimentario();
    this.newFiltro = true;

  }
  updatefiltroselect(paciente) {
    this.filtroSelected = paciente;
    this.isFiltroSelected = false;
    this.filtroService.getFiltrosNutricionista(this.authService.getusuario().id).subscribe(
      response => { this.filtros = response;
                    let i = response.findIndex(e => e.id === paciente.id);
                    this.filtroSelected = response[i];
                    this.isFiltroSelected = true;
      });
    this.newFiltro = false;
  }
  discard(menssaje){
    this.isFiltroSelected=false;
  }
}





