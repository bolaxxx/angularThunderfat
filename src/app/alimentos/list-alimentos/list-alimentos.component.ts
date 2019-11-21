import { Component, OnInit, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Alimento } from 'src/app/model/alimento';


@Component({
  selector: 'app-list-alimentos',
  templateUrl: './list-alimentos.component.html',
  styleUrls: ['./list-alimentos.component.sass']
})
export class ListAlimentosComponent implements OnInit ,OnChanges{

  @Input() alimentos: Alimento[];
  @Output() seleccion = new EventEmitter<Alimento>();
  // tslint:disable-next-line:variable-name
  private _searchTerm: string;
  public filteredAlimentos: Alimento[];
  constructor() {}

  ngOnInit() {}

  // tslint:disable-next-line:variable-name

  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    if (value === '') {
      this.filteredAlimentos = this.alimentos;
    } else {
      this.filteredAlimentos = this.filterPaciente(value);
    }
  }
  public filterPaciente(value: string): Alimento[] {
    return this.filteredAlimentos.filter(
      paciente => paciente.nombre.toLowerCase().indexOf(value) !== -1
    );
  }
  selecionarAlimento(alimento: Alimento): void {
    this.seleccion.emit(alimento);
    console.log('emitido el alimento desde la la lista ');
    
  }

ngOnChanges(changes: SimpleChanges): void {
  this.filteredAlimentos = this.alimentos;
}
}