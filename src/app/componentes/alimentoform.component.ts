import { Component, OnInit, Input, Inject } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Alimento } from '../model/alimento';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { AlimentoServiceService } from '../service/alimento-service.service';

@Component({
  selector: 'app-alimentoform',
  templateUrl: './alimentoform.component.html',
  styleUrls: ['./alimentoform.component.sass']
})
export class AlimentoformComponent implements OnInit {
  constructor(@Inject (MAT_BOTTOM_SHEET_DATA) public data: any, private alimentoservice: AlimentoServiceService) { }
  public alimento: Alimento = new Alimento();
  ngOnInit() {
    console.log(JSON.parse(this.data.id) + ' esto es el id del componente');
    this.alimentoservice.getAlimentoByid(this.data.id).subscribe(
  alimento => this.alimento = alimento
);
  }
 public create(): void{
  console.log('clicked');
  console.log(this.alimento);
 }
}
