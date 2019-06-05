import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AlimentoServiceService } from '../service/alimento-service.service';
import { ActivatedRoute } from '@angular/router';
import { Alimento } from '../model/alimento';
import {MatButtonModule, MatBottomSheet, MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import { AlimentoformComponent } from '../componentes/alimentoform.component';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.sass']
})
export class AlimentosComponent implements OnInit {
  alimentos: Alimento[];
  constructor(private authService: AuthService,
              private alimentoService: AlimentoServiceService,
              private activatedRoute: ActivatedRoute, private matBottonSheet: MatBottomSheet,private matButton: MatButtonModule) { }

openBottonSheet( idSelect: number ) {
  console.log(idSelect + ' el id select');
  this.matBottonSheet.open(AlimentoformComponent, {data: { id: [idSelect]}});
}
              ngOnInit() {
 this.alimentoService.getAlimentos().subscribe(
    alimentos => this.alimentos = alimentos
  );
  }

}
