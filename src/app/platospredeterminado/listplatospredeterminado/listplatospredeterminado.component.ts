import { Component, OnInit, OnChanges, Output, Input, EventEmitter, SimpleChanges, SimpleChange } from '@angular/core';
import { PlatoPredeterminado } from 'src/app/model/plato-predeterminado';
import { Paciente } from 'src/app/model/paciente';

@Component({
  selector: 'app-listplatospredeterminado',
  templateUrl: './listplatospredeterminado.component.html',
  styleUrls: ['./listplatospredeterminado.component.sass']
})
export class ListplatospredeterminadoComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() platos: PlatoPredeterminado[];
  @Output() seleccion = new EventEmitter<PlatoPredeterminado>();
  @Output() eliminado = new EventEmitter<PlatoPredeterminado>();
  @Output() nuevo = new EventEmitter<any>();
  // tslint:disable-next-line:variable-name
  private _searchTerm: string;
  public filteredPlatos: PlatoPredeterminado[];
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    if (value === '') {
      this.filteredPlatos = this.platos;
  } else{
    this.filteredPlatos = this.filterPaciente(value);
  }}
  public filterPaciente(value: string): PlatoPredeterminado[] {
    return this.filteredPlatos.filter(paciente => (paciente.nombre.toLowerCase()).indexOf(value) !== -1);
  }
  selecionarPlato(paciente: PlatoPredeterminado): void {
    console.log( 'plato emitido' + JSON.stringify(paciente) );
    this.seleccion.emit(paciente);
  }
  eliminarPlato(paciente: PlatoPredeterminado): void{
    console.log('plato elimniado ' + JSON.stringify(paciente));
    this.eliminado.emit(paciente);
  }
  nuevoPlatoPredeterminado(): void {
    this.nuevo.emit(true);
  }
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes) + 'changes ');
    const pacientes: SimpleChange = changes.platos;
    this.platos = pacientes.currentValue;
    this.filteredPlatos = this.platos;
  }

}
