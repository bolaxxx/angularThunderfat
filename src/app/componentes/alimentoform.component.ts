import { Component, OnInit, Input, Inject } from '@angular/core';

import { Alimento } from '../model/alimento';

import { AlimentoServiceService } from '../service/alimento-service.service';

@Component({
  selector: 'app-alimentoform',
  templateUrl: './alimentoform.component.html',
  styleUrls: ['./alimentoform.component.sass']
})
export class AlimentoformComponent implements OnInit {
  constructor( private alimentoservice: AlimentoServiceService) { }
 @Input() alimento: Alimento = new Alimento();
  ngOnInit() {

  }

}
