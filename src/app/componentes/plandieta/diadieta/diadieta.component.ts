import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { PlanDieta } from 'src/app/model/plan-dieta';
import { DiaDieta } from '../../../model/diadieta';

@Component({
  selector: 'app-diadieta',
  templateUrl: './diadieta.component.html',
  styleUrls: ['./diadieta.component.sass']
})
export class DiadietaComponent implements OnInit,OnChanges {


  @Input() dias: DiaDieta[];
  @Output() listaDiaDieta = new EventEmitter<DiaDieta>();

 diaSelected=new DiaDieta();

  constructor() { }
  ngOnInit() {
   // let diff = Math.abs(this.plandieta.fechaini.getTime() - this.plandieta.fechafin.getTime());
    // let diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    // for(let i = 0 ; i < diffDays; i++) {
    //  let temp = new DiaDieta();
    //  temp.fecha.setDate(this.plandieta.fechaini.getDate() + i);
    //  this.listdia.push(temp);
    


    // }
    console.log(JSON.stringify(this.dias) + 'listadia');

  }
    selectday(day: DiaDieta) {
      console.log(day);
      this.diaSelected = day;
      
      this.listaDiaDieta.emit(day);


    }
    SaveDaysToPlan() {
      //this.isDaySelected=false;
      //this.listaDiaDieta.emit(this.listdia);
    }
    guardarComidaEnDays($event) {
    
      console.log(JSON.stringify($event) + 'this is event en diadieta');
      this.diaSelected = $event;
    
     //onsole.log(JSON.stringify(this.listdia.push($event)) +' listdia en el componente diadieta metodoguardar'); 
      console.log(JSON.stringify(this.diaSelected) + 'comida select after add event');
    
      }
      ngOnChanges(changes: SimpleChanges): void {
        
      }

}
