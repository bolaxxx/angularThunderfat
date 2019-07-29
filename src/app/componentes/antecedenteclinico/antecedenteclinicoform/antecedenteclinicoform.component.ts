import { Component, OnInit, Inject } from '@angular/core';
import { AntecedenteclinicoService } from '../../../service/antecedenteclinico.service';
import { AntecedenteClinicos } from '../../../model/antecedente-clinicos';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-antecedenteclinicoform',
  templateUrl: './antecedenteclinicoform.component.html',
  styleUrls: ['./antecedenteclinicoform.component.sass']
})
export class AntecedenteclinicoformComponent implements OnInit {

  constructor(@Inject (MAT_BOTTOM_SHEET_DATA) public data: any,
              private bottomSheetRef: MatBottomSheetRef, private medicionservice: AntecedenteclinicoService) { }
  public antecedente: AntecedenteClinicos = new AntecedenteClinicos();
  public  isNew = true;
  ngOnInit() {
    if ( this.data.isNew === false ) {
      this.medicionservice.getMedicionByid(this.data.id).subscribe(
        medicion => this.antecedente = medicion);
      this.isNew = false;
      } else {
        this.isNew = true;
        this.antecedente = new AntecedenteClinicos();
      }
  }
  public guardarMedicion(): void{
    console.log(JSON.stringify(this.antecedente) + ' from paciente save');
    this.medicionservice.guardarMedicion(this.antecedente, this.data.idpaciente).subscribe(response =>  console.log(response));
    this.bottomSheetRef.dismiss();
}
  public GuardarEdicion(): void{
  console.log(JSON.stringify(this.antecedente) + ' desde guardar Edicion' );
  this.medicionservice.updateMedicicion(this.antecedente).subscribe(response=> console.log(response));
  this.bottomSheetRef.dismiss();
}

public Eliminar():void{
  console.log(this.antecedente.id+ 'el id que pasa en el metodo borrar');
  this.medicionservice.eliminarMedicion(this.antecedente.id).subscribe(response=>console.log(response));
  this.bottomSheetRef.dismiss();
}
}
