import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Alimento } from '../model/alimento';

@Component({
  selector: 'app-alimentoform',
  templateUrl: './alimentoform.component.html',
  styleUrls: ['./alimentoform.component.sass']
})
export class AlimentoformComponent implements OnInit {

  constructor() { }
  public alimento: Alimento = new Alimento();
  ngOnInit() {
  }
 public create(): void{
  console.log('clicked');
  console.log(this.alimento);
 }
}
