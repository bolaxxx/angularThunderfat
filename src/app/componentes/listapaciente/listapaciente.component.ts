import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { Paciente } from '../../model/paciente';

@Component({
  selector: 'app-listapaciente',
  templateUrl: './listapaciente.component.html',
  styleUrls: ['./listapaciente.component.sass']
})
export class ListapacienteComponent implements OnInit,OnChanges {

  constructor() {}
  @Input() pacientes: Paciente[];
  @Output() seleccion = new EventEmitter<Paciente>();
  @Output() eliminado = new EventEmitter<Paciente>();
  // tslint:disable-next-line:variable-name
  private _searchTerm: string;
  public filteredPaciente: Paciente[];
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    if (value === '') {
      this.filteredPaciente=this.pacientes;
  } else{
    this.filteredPaciente = this.filterPaciente(value);
  }}
  public filterPaciente(value: string): Paciente[] {
    return this.filteredPaciente.filter(paciente => (paciente.nombre.toLowerCase() + ' '
    + paciente.apellidos.toLowerCase()).indexOf(value) !== -1);
  }
  selecionarPaciente(paciente: Paciente): void {
    console.log( 'paciente emitido' + JSON.stringify(paciente) );
    this.seleccion.emit(paciente);
  }
  eliminarPaciente(paciente: Paciente): void{
    console.log('paciente elimniado ' + JSON.stringify(paciente));
    this.eliminado.emit(paciente);
  }
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes)+'changes ');
    const pacientes: SimpleChange = changes.pacientes;
    this.pacientes = pacientes.currentValue;
    this.filteredPaciente = this.pacientes;
  }
}
