import { Component, OnInit } from '@angular/core';
import { MatListModule, MatBottomSheet, MatButtonModule, MatMenuModule, MatCardModule, MatSelectModule, MatInputModule, MatIconModule } from '@angular/material';
import { Paciente } from '../model/paciente';
import { AuthService } from '../service/auth.service';
import { PacienteService } from '../service/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../model/usuario';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.sass']
})
export class PacienteComponent implements OnInit {
  pacientes: Paciente [];
  constructor(private authService: AuthService,
              private pacienteService: PacienteService,
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

  listarMedicionGeneral(id: number): void{
    this.router.navigate(['mediciongeneral/', id]);

  }

}
