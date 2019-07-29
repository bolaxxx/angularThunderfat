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
              private matIconModule: MatIconModule) { }
              emailFormControl = new FormControl();

  ngOnInit() {
    this.pacienteService.getPacientes(this.authService.getusuario().id).subscribe(
      pacientes => this.pacientes = pacientes
    );
  }

  openBottonSheet( idSelect: number ) {
    console.log(idSelect + ' el id select');
    const refe =this.matBottonSheet.open(PacienteformComponent, {data: { id: [idSelect] , isNew : false}});
    refe.afterDismissed().subscribe( response => this.pacienteService.getPacientes(this.authService.getusuario().id).subscribe(
      pacientes => this.pacientes = pacientes
    ));
  }
  openNewBottonSheet() {
    const refe = this.matBottonSheet.open(PacienteformComponent, {data: {isNew: true}});
    refe.afterDismissed().subscribe( response => this.pacienteService.getPacientes(this.authService.getusuario().id).subscribe(
      pacientes => this.pacientes = pacientes
    ));
  }
  listarMedicionGeneral(id: number): void {
    this.router.navigate(['mediciongeneral/', id]);

  }
  listarMedicionSegmental(id: number): void {
    this.router.navigate(['medicionsegmental/', id]);

  }
  listarMedicionEspecifica(id: number): void {
    this.router.navigate(['medicionespecifica/', id]);

  }
  listarAntecedenteClinico(id: number): void {
    this.router.navigate(['antecedenteclinico/', id]);

  }
  listarAntecedenteTratamiento(id: number): void {
    this.router.navigate(['antecedentetratamiento/', id]);

  }
  buscarPaciente(): void {
    console.log( 'este es el searchterm' + this.searchTerm);
    console.log ('Estes es el searchtype' + this.searchtype );
    if (this.searchTerm === '' && this.searchtype === 0) {
      this.pacienteService.getPacientes(this.authService.getusuario().id).subscribe(
        pacientes => this.pacientes = pacientes
      );

    } else {
      if (this.searchTerm === undefined || this.searchTerm === '') {
        swal.fire('Ningun termino de busqueda ', 'por favor introduzca un termino para buscar ', 'error');

      } else {
        console.log('llego antes del switch ' + this.searchtype);
        switch (+this.searchtype) {
          case 0:
            console.log('caso 0');
            break;
            case 1 :
                this.pacienteService.buscarporDni(this.authService.getusuario().id, this.searchTerm)
                .subscribe(pacientes => this.pacientes = pacientes);
                console.log('caso 1');
                break;

            case 2:
              this.pacienteService.buscarporNombreCompleto(this.authService.getusuario().id, this.searchTerm)
              .subscribe(pacientes => this.pacientes = pacientes);
              console.log('caso 2' + JSON.stringify(this.pacientes));
              break;

            case 3:
               this.pacienteService.buscarporEmail(this.authService.getusuario().id, this.searchTerm)
              .subscribe(pacientes => this.pacientes = pacientes);
               console.log('caso 3');
               break;

          }
      }
    }

  }
  selecionarPaciente(paciente: Paciente): void {
    this.isPaciententeSelected = false;
    this.pacienteSelected = paciente;
    this.isPaciententeSelected = true;
  }
}
