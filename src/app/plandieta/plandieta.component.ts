import { Component, OnInit } from '@angular/core';
import { PlanDieta } from '../model/plan-dieta';

@Component({
  selector: 'app-plandieta',
  templateUrl: './plandieta.component.html',
  styleUrls: ['./plandieta.component.sass']
})
export class PlandietaComponent implements OnInit {
  dieta: PlanDieta;
  isNew:boolean=true;
  constructor() { }

  ngOnInit() {
    this.dieta= new PlanDieta();
  }

}
