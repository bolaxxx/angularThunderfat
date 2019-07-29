import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DiaDieta } from '../../../model/diadieta';
import { Comida } from 'src/app/model/comida';


@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.sass']
})
export class ComidaComponent implements OnInit {
@Input() diaSelected: DiaDieta;
diaSalida: DiaDieta=new DiaDieta();
comidaselect: Comida;

isComidaSelect: boolean = false;
@Output() diaDieta = new EventEmitter<DiaDieta>();
  constructor() { }

  ngOnInit() {
    this.diaSalida=this.diaSelected;
    console.log(JSON.stringify(this.diaSelected) + 'from comidas component');
  }
selectComida( selection: Comida){
  //this.isComidaSelect=false;
  this.comidaselect = selection;
  this.isComidaSelect = true;
}
guardarPlatosEnComidaSelecionada($event){
console.log(JSON.stringify($event) + 'this is event ');
this.comidaselect.platos=$event;

console.log(JSON.stringify(this.comidaselect) + 'comida select after add event');

console.log(JSON.stringify(this.diaSelected) + 'diaselect estado despues de event ');
this.isComidaSelect = false;
console.log(JSON.stringify(this.diaSalida) + 'diaSalida estado despues de eliminar componente platoplandieta ');
}
saveMealsToDay(){
  this.isComidaSelect=false;
  this.diaDieta.emit(this.diaSalida);
  
}
}
