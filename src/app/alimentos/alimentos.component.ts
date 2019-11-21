import { Component, OnInit } from '@angular/core';

import { AlimentoServiceService } from '../service/alimento-service.service';

import { Alimento } from '../model/alimento';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.sass']
})
export class AlimentosComponent implements OnInit {
  alimentos: Alimento[];
  alimentoSeleccionado: Alimento;
  isAlimentoSelected:boolean;
  constructor(private alimentoService: AlimentoServiceService) {}

  ngOnInit() {
    this.isAlimentoSelected=false; 
    this.alimentoService
      .getAlimentos()
      .subscribe(alimentos => (this.alimentos = alimentos));
  }
  selecionarAlimento(alimento){
    this.alimentoSeleccionado=alimento;
    this.isAlimentoSelected=true;
  }
}
