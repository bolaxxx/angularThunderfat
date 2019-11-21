import { Component, OnInit } from '@angular/core';
import { MatListModule, MatBottomSheet,
   MatButtonModule, MatMenuModule, MatCardModule,
   MatSelectModule, MatInputModule, MatIconModule } from '@angular/material';
import { Paciente } from '../model/paciente';
import { AuthService } from '../service/auth.service';
import { PacienteService } from '../service/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { FormControl } from '@angular/forms';
import { PacienteformComponent } from '../componentes/pacienteform/pacienteform.component';
import swal from 'sweetalert2';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.sass']
})
export class PacienteComponent implements OnInit {
  pacientes: Paciente [];
  searchTerm = '' ;
  searchtype = 0;
  isPaciententeSelected: boolean ;
  pacienteSelected: Paciente;
  newPaciente: boolean;
  constructor(private authService: AuthService,
              private pacienteService: PacienteService,
              private  matlist: MatListModule,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private matBottonSheet: MatBottomSheet,
              private matButton: MatButtonModule,
              private matCard: MatCardModule,
              private matMenu: MatMenuModule,
              private matSelect: MatSelectModule,
              private matInputModule: MatInputModule,
              private matIconModule: MatIconModule) {
                this.pacienteService.getPacientes(this.authService.getusuario().id).subscribe(
                  pacientes => this.pacientes = pacientes
                );
               }
              emailFormControl = new FormControl();

  ngOnInit() {
    this.pacienteService.getPacientes(this.authService.getusuario().id).subscribe(
      pacientes => this.pacientes = pacientes
    );
    this.newPaciente = false;
  }


  procesaPropagar(mensaje) {
    console.log(mensaje);
    this.pacienteService.getPacientes(this.authService.getusuario().id).subscribe(
      pacientes => { this.pacientes = pacientes;
                     this.newPaciente = false;
       } );


  }
  selecionarPaciente(paciente: Paciente): void {
    console.log('paciente selecionado' + JSON.stringify(paciente));
    this.pacienteSelected = paciente;
    this.newPaciente = false;
    this.isPaciententeSelected = false;
    this.isPaciententeSelected = true;
  }
  eliminarPaciente(paciente: Paciente): void {
      console.log('llego al componente padre en eliminar');
      let  i = 0;
      console.log('estado del aarray pacientes antes de borrar ' + JSON.stringify(this.pacientes));
      while (i < this.pacientes.length) {
        if (this.pacientes[i].id === paciente.id) {
          console.log('entro por el if eliminar ');
          swal.fire({
            title: '¿Estas seguro que quieres eliminar al paciente' + paciente.nombre + ' ' + paciente.apellidos +  ' ?',
            text: 'No se podran recuperar los datos',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo '
          }).then((result) => {
            if (result.value) {
              i = this.pacientes.length + 1;
              this.pacienteService.eliminarPaciente(paciente.id).subscribe(response => {
                this.pacientes.splice(i, 1);
                console.log('respuesta del alert+deberia haber borrado ');
                swal.fire(
                  '¡Eliminado!',
                  'El paciente ha sido borrado.',
                  'success'
                );
                this.pacienteService.getPacientes(this.authService.getusuario().id).subscribe(respuesta => this.pacientes = respuesta);
              });
            }
          });

        }
        i++;
      }
      console.log('este es el array en el componente padre despues de eliminar ' + JSON.stringify(this.pacientes));
  }
  nuevoPaciente(): void {
    this.isPaciententeSelected = false;
    this.newPaciente = false;
    this.newPaciente = true;

  }
  updatePacienteSelect(paciente) {
    this.pacienteSelected = paciente;
    this.isPaciententeSelected = false;
    this.pacienteService.getPacientes(this.authService.getusuario().id).subscribe(
      response => { this.pacientes = response;
                    let i = response.findIndex(e => e.id === paciente.id);
                    this.pacienteSelected = response[i];
                    this.isPaciententeSelected=true;
      });
    this.newPaciente = false;
  }
}
