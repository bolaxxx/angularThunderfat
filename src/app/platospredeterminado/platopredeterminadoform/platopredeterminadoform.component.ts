import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Alimento } from 'src/app/model/alimento';
import { PlatoPredeterminado } from 'src/app/model/plato-predeterminado';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AlimentoServiceService } from 'src/app/service/alimento-service.service';
import { PlatopredeterminadoService } from 'src/app/service/platopredeterminado.service';
import { AuthService } from 'src/app/service/auth.service';
import { startWith, map } from 'rxjs/operators';
import { Ingrediente } from '../../model/ingrediente';
import swal from 'sweetalert2';

@Component({
  selector: 'app-platopredeterminadoform',
  templateUrl: './platopredeterminadoform.component.html',
  styleUrls: ['./platopredeterminadoform.component.sass']
})
export class PlatopredeterminadoformComponent implements OnInit {
  stateCtrl = new FormControl();
  filteredAlimentos: Observable<Alimento[]>;
  alimentos: Alimento[] = [];
  @Input() platoPredeterminado: PlatoPredeterminado = new PlatoPredeterminado();
  @Input() isNew: boolean;
  cantidad: number;
  @Output()plato =new EventEmitter<any>();
  @Output()dismiss=new EventEmitter<any>();
  constructor(
    matautoComplete: MatAutocompleteModule,
    matInput: MatInputModule,
    private alimentoService: AlimentoServiceService,
    private platopredeterminadoService: PlatopredeterminadoService,
    private authService: AuthService
  ) {
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
  private _filterStates(value: string): Alimento[] {
    const filterValue = value;
    // .toLowerCase();

    return this.alimentos.filter(
      alimentos => alimentos.nombre.toLowerCase().indexOf(filterValue) === 0
    );
  }
  displayFn(options: Alimento[]): (id: number) => string {
    return (id: number) => {
      const correspondingOption = Array.isArray(options)
        ? options.find(option => option.id === id)
        : null;
      return correspondingOption ? correspondingOption.nombre : '';
    };
  }
  public guardarCita(): void {
    this.platopredeterminadoService
      .guardarPlato(this.platoPredeterminado)
      .subscribe(response =>{ console.log(response);
                              this.plato.emit(response);      });

  }
  public Eliminar(): void {
    console.log(this.platoPredeterminado.id + 'plato a eliminar');
    this.platopredeterminadoService
      .borrarCita(this.platoPredeterminado.id)
      .subscribe(response => console.log(response));
  }
  public GuardarEdicion(): void {}
  deleteIngrediente(id: number) {
    console.log(id + 'numero a borar');
    let i = 0;
    while (i < this.platoPredeterminado.ingredientes.length) {
      if (this.platoPredeterminado.ingredientes[i].alimento.id === id) {
        this.platoPredeterminado.grasastotales -= this.platoPredeterminado.ingredientes[
          i
        ].grasastotales;
        this.platoPredeterminado.kcaltotales -= this.platoPredeterminado.ingredientes[
          i
        ].kcaltotales;
        this.platoPredeterminado.proteinastotales -= this.platoPredeterminado.ingredientes[
          i
        ].proteinastotales;
        this.platoPredeterminado.hidratostotales -= this.platoPredeterminado.ingredientes[
          i
        ].hidratostotales;
        this.platoPredeterminado.ingredientes.splice(i, 1);

        i = this.platoPredeterminado.ingredientes.length + 1;
      }
      i++;
    }
  }
  addIngrediente() {
    const ingredientetoAdd = new Ingrediente();
    ingredientetoAdd.cantidad = this.cantidad;
    let i = 0;
    let j = 0;
    let enlista = false;
    while (j < this.platoPredeterminado.ingredientes.length) {
      if (
        this.platoPredeterminado.ingredientes[j].alimento.id ===
        this.stateCtrl.value
      ) {
        swal.fire(
          'Error ',
          'El Ingrediente ya esta añadido al plato ',
          'error'
        );
        enlista = true;
        j = this.platoPredeterminado.ingredientes.length + 1;
      } else {
        enlista = false;
      }
      j++;
    }

    while (i < this.alimentos.length && enlista === false) {
      if (this.stateCtrl.value === this.alimentos[i].id) {
        ingredientetoAdd.alimento = this.alimentos[i];
        ingredientetoAdd.grasastotales =
          this.alimentos[i].grasas * this.cantidad * 0.01;
        ingredientetoAdd.proteinastotales =
          this.alimentos[i].proteinas * this.cantidad * 0.01;
        ingredientetoAdd.kcaltotales =
          this.alimentos[i].cal * this.cantidad * 0.01;
        ingredientetoAdd.hidratostotales =
          this.alimentos[i].hidratosdecarbono * this.cantidad * 0.01;
        this.platoPredeterminado.grasastotales +=
          ingredientetoAdd.grasastotales;
        this.platoPredeterminado.proteinastotales +=
          ingredientetoAdd.proteinastotales;
        this.platoPredeterminado.kcaltotales += ingredientetoAdd.kcaltotales;
        this.platoPredeterminado.hidratostotales +=
          ingredientetoAdd.hidratostotales;
        console.log(ingredientetoAdd + 'el ingrediente ha añadir ');
        this.platoPredeterminado.ingredientes.push(ingredientetoAdd);
        console.log(
          JSON.stringify(this.platoPredeterminado) +
            'el plato predeterminado añadiendo ingrediente'
        );
        i = this.alimentos.length + 1;
      }
      i++;
    }
  }
  close(){
    this.dismiss.emit('close');
  }
}
