import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Paciente } from '../../model/paciente';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.sass']
})
export class InformeComponent implements OnInit,OnChanges {
  

  constructor() {
    this.formdatos = false;
   }
  @Input() paciente: Paciente;
  formdatos: boolean;
  formMedicionGeneneral: boolean;
  formMedicionEspecica: boolean;
  pacienteid: number;
  ngOnInit() {
    this.formdatos = false;
    this.pacienteid = this.paciente.id;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('cambios informe component ' + JSON.stringify(changes) );
    }
  verDatosPersonales(): void {
    this.pacienteid = this.paciente.id;
    this.formdatos=true;

  }
  procesaPropagar(mensaje) {
    console.log(mensaje);
    this.formdatos = false;


  }
}
