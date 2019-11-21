import { Component, OnInit } from '@angular/core';
import { PlanDieta } from 'src/app/model/plan-dieta';
import { PlandietaService } from '../../../service/plandieta.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalleplan',
  templateUrl: './detalleplan.component.html',
  styleUrls: ['./detalleplan.component.sass']
})
export class DetalleplanComponent implements OnInit {
  dieta: PlanDieta;
  isNew:boolean=false;

  constructor(private plandietaservice: PlandietaService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.plandietaservice.getPacienteByid(Number(this.route.snapshot.paramMap.get('id'))).subscribe(element=>{this.dieta=element;
                                                                                                              console.log(element);});
  }

}
