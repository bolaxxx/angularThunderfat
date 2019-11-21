import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { PlatoPlanDieta } from '../../../model/plato-plan-dieta';
import { Comida } from '../../../model/comida';
import { PlatoPredeterminado } from '../../../model/plato-predeterminado';
import { FormControl } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { PlatopredeterminadoService } from 'src/app/service/platopredeterminado.service';
import { AuthService } from 'src/app/service/auth.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Ingrediente } from 'src/app/model/ingrediente';

@Component({
  selector: 'app-platoplandieta',
  templateUrl: './platoplandieta.component.html',
  styleUrls: ['./platoplandieta.component.sass']
})
export class PlatoplandietaComponent implements OnInit, OnChanges {
  @Output() platosComida = new EventEmitter<PlatoPlanDieta[]>();
  @Input() selectedMeal: Comida;
  stateCtrl = new FormControl();
  private listPlatos: PlatoPredeterminado[] = [];
  ListPredetermiandos: PlatoPredeterminado[] = [];
  platosForm: PlatoPlanDieta[] = [];
  filteredAlimentos: Observable<PlatoPredeterminado[]>;
  kcaltotales = 0;
  constructor(
    matautoComplete: MatAutocompleteModule,
    matInput: MatInputModule,
    private platopredeterminadoService: PlatopredeterminadoService,
    private authService: AuthService
  ) {
    this.filteredAlimentos = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state =>
        state ? this._filterStates(state) : this.ListPredetermiandos.slice()
      )
    );
  }

  ngOnInit() {
    this.platopredeterminadoService
      .getPlatosNutricionista(this.authService.getusuario().id)
      .subscribe(response => (this.ListPredetermiandos = response));
    console.log(
      JSON.stringify(this.selectedMeal.platos) + 'platos del selected meal init'
    );
    ///this.selectedMeal.platos.forEach(element => {
      //this.platosForm.push(element);
      //this.kcaltotales += element.kcaltotales;
      //console.log(
        //JSON.stringify(this.platosForm) + 'platos del form en bucle meal init'
      //);
    //});
  }

  addPlatosToMeal() {
    console.log(
      JSON.stringify(this.platosForm) + ' lo que emito desde c plato '
    );
    this.platosComida.emit(this.platosForm);
  }
  displayFn(options: PlatoPredeterminado[]): (id: number) => string {
    return (id: number) => {
      const correspondingOption = Array.isArray(options)
        ? options.find(option => option.id === id)
        : null;
      return correspondingOption ? correspondingOption.nombre : '';
    };
  }
  private _filterStates(value: string): PlatoPredeterminado[] {
    const filterValue = value;
    // .toLowerCase();

    return this.ListPredetermiandos.filter(
      alimentos => alimentos.nombre.toLowerCase().indexOf(filterValue) === 0
    );
  }
  addPlatotolist() {
    let platotemp = new PlatoPredeterminado();
    this.platopredeterminadoService
      .getPlatoByid(this.stateCtrl.value)
      .subscribe(response => {
        platotemp = response;
        const platotoAdd = new PlatoPlanDieta();
        platotemp.ingredientes.forEach(ingrediente => {
          const ingredienteTemp = new Ingrediente();
          ingredienteTemp.alimento = ingrediente.alimento;
          ingredienteTemp.cantidad = ingrediente.cantidad;
          ingredienteTemp.grasastotales = ingrediente.grasastotales;
          ingredienteTemp.proteinastotales = ingrediente.proteinastotales;
          ingredienteTemp.hidratostotales = ingrediente.hidratostotales;
          ingredienteTemp.kcaltotales = ingrediente.kcaltotales;

          platotoAdd.ingredientes.push(ingredienteTemp);
          console.log(
            'ingredientes añadidos en añadir plato ' +
              JSON.stringify(platotoAdd.ingredientes)
          );
        });
        // platotoAdd.ingredientes = platotemp.ingredientes;
        platotoAdd.grasastotales = platotemp.grasastotales;
        platotoAdd.proteinastotales = platotemp.proteinastotales;
        platotoAdd.hidratostotales = platotemp.hidratostotales;
        platotoAdd.kcaltotales = platotemp.kcaltotales;
        platotoAdd.nombre = platotemp.nombre;
        platotoAdd.receta = platotemp.receta;
        this.kcaltotales += platotemp.kcaltotales;
        this.platosForm.push(platotoAdd);
      });
  }
  deletePlatoFromMeal(plato) {
    this.kcaltotales = -this.selectedMeal.platos[plato].kcaltotales;
    this.selectedMeal.platos.splice(plato, 1);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.kcaltotales = 0;
    this.platosForm= changes.selectedMeal.currentValue.platos;
    this.selectedMeal.platos.forEach(element => {
        this.kcaltotales += element.kcaltotales;
       // this.platosForm.push(element);
      });
    
  }
}
