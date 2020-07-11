import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { PlanDieta } from '../../model/plan-dieta';
import { DiaDieta } from 'src/app/model/diadieta';
import { Comida } from 'src/app/model/comida';
import { Paciente } from 'src/app/model/paciente';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { PacienteService } from 'src/app/service/paciente.service';
import { AuthService } from 'src/app/service/auth.service';
import { FiltroAlimentario } from '../../model/filtro-alimentario';
import { FiltroalimentarioService } from '../../service/filtroalimentario.service';
import { element } from 'protractor';
import { PlandietaService } from '../../service/plandieta.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-plandietaform',
  templateUrl: './plandietaform.component.html',
  styleUrls: ['./plandietaform.component.sass']
})
export class PlandietaformComponent implements OnInit, OnChanges {
  @Input() dieta: PlanDieta;
  @Input() isNew: boolean;
  dietaFinal: PlanDieta = new PlanDieta();
  stateCtrl = new FormControl();
  filteredPaciente: Observable<Paciente[]>;
  pacientes: Paciente[] = [];
  filtros: FiltroAlimentario[] = [];
  filteredFiltros: Observable<FiltroAlimentario[]>;
  stateCtrl2 = new FormControl();
  diaSelecionado: DiaDieta;
  comidaSelecionada: Comida;
  platoform:boolean;
  constructor(
    matautoComplete: MatAutocompleteModule,
    matInput: MatInputModule,
    private pacienteService: PacienteService,
    private authService: AuthService,
    private filtroalimentarioservice: FiltroalimentarioService,
    private plandietaservice: PlandietaService,
    private router: Router
  ) {
    this.filteredPaciente = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.pacientes.slice()))
    );
    this.filteredFiltros = this.stateCtrl2.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates2(state) : this.filtros.slice()))
    );
  }

  ngOnInit() {
    this.pacienteService
      .getPacientes(this.authService.getusuario().id)
      .subscribe(response => (this.pacientes = response));
    this.filtroalimentarioservice
      .getFiltrosNutricionista(this.authService.getusuario().id)
      .subscribe(response => (this.filtros = response));
    const filtro  = this.filtros.find(c => c.id === this.dieta.filtrosaplicados.id );
    this.stateCtrl2.setValue(filtro);
    this.platoform=false;
   // this.dieta = new PlanDieta();
    //this.isNew = true;
  }
  definirComida() {
    if (
      this.dieta.fechaini !== undefined &&
      this.dieta.fechafin !== undefined &&
      this.dieta.comidasdiarias !== undefined
    ) {
      console.log(this.dieta.fechaini);
      let date1 = new Date(this.dieta.fechaini).getTime();
      let date2 = new Date(this.dieta.fechafin).getTime();
      console.log(date1 + 'date1');
      console.log(date2);
      let diff = Math.abs(date1 - date2);
      console.log(diff);
      let diffDays = Math.ceil(diff / (1000 * 3600 * 24));
      console.log(diffDays + 'dias diferencia');

      for (let i = 1; i <= diffDays; i++) {
        const temp = new DiaDieta();
        temp.fecha = new Date(date1 + 1000 * 60 * 60 * 24 * i);
        for (let j = 0; j < this.dieta.comidasdiarias; j++) {
          const tempcomida = new Comida();
          temp.comidas.push(tempcomida);
        }
        this.dieta.dias.push(temp);
      }
      //this.isNew = false;
    }
    console.log(JSON.stringify(this.dieta.dias) + 'desde el parent');
   // this.isNew = false;
  }
  selecccionarDia(dia) {
    this.diaSelecionado = dia;
    console.log(dia + 'dia selecionado ');
  }
  guardarPlan($event) {
    console.log(JSON.stringify($event) + '$event');
    this.dietaFinal = this.dieta;
    this.filtroalimentarioservice
      .getPacienteByid(this.stateCtrl2.value)
      .subscribe(response => (this.dieta.filtrosaplicados = response));
    this.dietaFinal.dias = $event;
    //this.dieta.dias = $event;
    //this.isNew = false;
    console.log(
      JSON.stringify(this.dietaFinal) + 'asi queda el plan de dieta '
    );
    console.log(
      JSON.stringify(this.stateCtrl.value) +
        ' valor de paciente en el autocomplete '
    );
    console.log(JSON.stringify(this.dieta) + 'dieta antes de guardar');
    this.plandietaservice
      .guardarCita(this.dieta, this.stateCtrl.value)
      .subscribe(response => console.log(response));
  }
  displayFn(options: Paciente[]): (id: number) => string {
    return (id: number) => {
      const correspondingOption = Array.isArray(options)
        ? options.find(option => option.id === id)
        : null;
      return correspondingOption
        ? correspondingOption.nombre + ' ' + correspondingOption.apellidos
        : '';
    };
  }
  private _filterStates(value: string): Paciente[] {
    const filterValue = value;
    //.toLowerCase();

    return this.pacientes.filter(
      paciente => paciente.nombre.toLowerCase().indexOf(filterValue) === 0
    );
  }
  displayFn1(options: FiltroAlimentario[]): (id: number) => string {
    return (id: number) => {
      const correspondingOption = Array.isArray(options)
        ? options.find(option => option.id === id)
        : null;
      return correspondingOption ? correspondingOption.nombre : '';
    };
  }
  private _filterStates2(value: string): FiltroAlimentario[] {
    const filterValue2 = value;
    //.toLowerCase();

    return this.filtros.filter(
      paciente => paciente.nombre.toLowerCase().indexOf(filterValue2) === 0
    );
  }
  seleccionarComida(comida) {
    this.platoform=false;
    this.comidaSelecionada = comida;
    this.platoform=true;
  }
  islleno(): boolean {
    console.log(JSON.stringify(this.dieta));
    let i = 0;
    let j = 0;
    while (this.dieta.dias.length < i) {
      j = 0;
      while (this.dieta.dias[i].comidas.length < j) {
        if (this.dieta.dias[i].comidas[j].platos.length > 0) {
          j++;
        } else {
          return false;
        }
      }
      i++;
    }
    return true;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.dieta.isFirstChange()){
    const filtro  = this.filtros.find(c => c.id ===this.dieta.filtrosaplicados.id );
    this.stateCtrl2.setValue(filtro);
  }
  }
  addPlatoToSelectedMeal(platos) {
    console.log('plandieta estado actual antes de añadir ' + JSON.stringify(this.dieta));
    
    this.comidaSelecionada.platos = platos;
    let i = this.diaSelecionado.comidas.findIndex(
      element => element.hora === this.comidaSelecionada.hora
    );
    if (i < 0) {
      console.log('error al encontrar la posicion de la comida ');
    } else {
      this.diaSelecionado.comidas[i] = this.comidaSelecionada;
      let j = this.dieta.dias.findIndex(
        element => element.fecha === this.diaSelecionado.fecha
      );
      if (j < 0) {
        console.log('error al encontrar posicion del dia ');
      } else {
        this.dieta.dias[j] = this.diaSelecionado;
      }
    }
    console.log('plandieta estado actual despues de añadir ' + JSON.stringify(this.dieta));
    this.platoform=false;
  }
  savetoDatabase(){
    console.log('plandieta estado actual despues de añadir ' + JSON.stringify(this.dieta));
    this.filtroalimentarioservice
    .getPacienteByid(this.stateCtrl2.value)
    .subscribe(response => {this.dieta.filtrosaplicados = response;
                            this.plandietaservice
      .guardarCita(this.dieta, this.stateCtrl.value)
      .subscribe(response1 => this.router.navigate(['/paciente'])); });
  }
  updateToDatabase(){
    this.filtroalimentarioservice
    .getPacienteByid(this.stateCtrl2.value)
    .subscribe(response => {this.dieta.filtrosaplicados = response;
                            this.plandietaservice
      .UpdatePlan(this.dieta, this.stateCtrl.value)
      .subscribe(response1 => this.router.navigate(['/paciente'])); });
  }
}
