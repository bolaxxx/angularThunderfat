import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AlimentoServiceService } from '../service/alimento-service.service';
import { ActivatedRoute } from '@angular/router';
import { Alimento } from '../model/alimento';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.sass']
})
export class AlimentosComponent implements OnInit {
  alimentos: Alimento[];
  constructor(private authService: AuthService,
              private alimentoService: AlimentoServiceService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
 this.alimentoService.getAlimentos().subscribe(
    alimentos => this.alimentos = alimentos
  );
  }

}
