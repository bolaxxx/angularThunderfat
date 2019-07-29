import { Component, OnInit, Input } from '@angular/core';
import { Paciente } from '../../model/paciente';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.sass']
})
export class InformeComponent implements OnInit {

  constructor() { }
  @Input() paciente: Paciente;
  ngOnInit() {
  }

}
