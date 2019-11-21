import { Component, OnInit, EventEmitter, Input, Output, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';
import { FiltroAlimentario } from '../../model/filtro-alimentario';


@Component({
  selector: 'app-list-filtro-alimentario',
  templateUrl: './list-filtro-alimentario.component.html',
  styleUrls: ['./list-filtro-alimentario.component.sass']
})
export class ListFiltroAlimentarioComponent implements OnInit , OnChanges {

  constructor() { }
  @Input() filtros: FiltroAlimentario[];
  @Output() seleccion = new EventEmitter<FiltroAlimentario>();
  @Output() eliminado = new EventEmitter<FiltroAlimentario>();
  @Output() nuevo = new EventEmitter<any>();
  // tslint:disable-next-line:variable-name
  private _searchTerm: string;
  public filteredFiltros: FiltroAlimentario[];
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    if (value === '') {
      this.filteredFiltros = this.filtros;
  } else {
    this.filteredFiltros = this.filterFiltro(value);
  }}
  public filterFiltro(value: string): FiltroAlimentario[] {
    return this.filteredFiltros.filter(paciente => (paciente.nombre.toLowerCase()).indexOf(value) !== -1);
  }
  selecionarFiltro(paciente: FiltroAlimentario): void {
    console.log( 'plato emitido' + JSON.stringify(paciente) );
    this.seleccion.emit(paciente);
  }
  eliminarFiltro(paciente: FiltroAlimentario): void {
    console.log('plato elimniado ' + JSON.stringify(paciente));
    this.eliminado.emit(paciente);
  }
  nuevoFiltroAlimentario(): void {
    this.nuevo.emit(true);
  }
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes) + 'changes ');
    const pacientes: SimpleChange = changes.filtros;
    this.filtros = pacientes.currentValue;
    this.filteredFiltros = this.filtros;
  }

}
