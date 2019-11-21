import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FiltroAlimentario } from '../../model/filtro-alimentario';
import { Alimento } from '../../model/alimento';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { AlimentoServiceService } from '../../service/alimento-service.service';
import { FiltroalimentarioService } from '../../service/filtroalimentario.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-filtroalimentarioform',
  templateUrl: './filtroalimentarioform.component.html',
  styleUrls: ['./filtroalimentarioform.component.sass']
})
export class FiltroalimentarioformComponent implements OnInit {
  stateCtrl = new FormControl();
  filteredAlimentos: Observable<Alimento[]>;
  @Input()filtroalimnetario: FiltroAlimentario = new FiltroAlimentario();
  alimentos: Alimento[] = [];
  @Input() isNew: boolean;
  @Output()filtro = new EventEmitter<any>();
  @Output() discard = new EventEmitter<any>();
  constructor(
    private alimentoService: AlimentoServiceService,
    private filtroalimentarioService: FiltroalimentarioService  ) {
    this.filteredAlimentos = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.alimentos.slice()))
    );
  }

  ngOnInit() {
    this.alimentoService
      .getAlimentos()
      .subscribe(response => (this.alimentos = response));
  }

  borrarAlimento(id: number): void {
    for (let ele = 0; ele < this.filtroalimnetario.alimentos.length; ele++) {
      if (this.filtroalimnetario.alimentos[ele].id === id) {
        this.filtroalimnetario.alimentos.splice(ele, 1);

      }
    }
  }
  displayFn(options: Alimento[]): (id: number) => string {
    return (id: number) => {
      const correspondingOption = Array.isArray(options)
        ? options.find(option => option.id === id)
        : null;
      return correspondingOption ? correspondingOption.nombre : '';
    };
  }
  addalimento(): void {
    let i = 0;
    while (i < this.alimentos.length) {
      if (this.stateCtrl.value === this.alimentos[i].id) {
        if (
          this.filtroalimnetario.alimentos.includes(this.alimentos[i]) === false
        ) {
          this.filtroalimnetario.alimentos.push(this.alimentos[i]);
          i = this.alimentos.length;
        } else {
          swal.fire('Error', 'Alimento ya añadido al filtro ', 'error');
        }
      }
      i++;
    }
  }
  private _filterStates(value: string): Alimento[] {
    const filterValue = value;
    // .toLowerCase();

    return this.alimentos.filter(
      alimento => alimento.nombre.toLowerCase().indexOf(filterValue) === 0
    );
  }
  guardarFiltro() {
    this.filtroalimentarioService.guardarFiltro(this.filtroalimnetario).subscribe(response => {
       console.log(response);
       this.filtro.emit(this.filtroalimnetario); });

  }
  eliminarFiltro( ) {
    this.filtroalimentarioService.borrarCita(this.filtroalimnetario.id).subscribe(response => console.log(response));

  }
  close(){
    this.discard.emit(close);
  }
}
