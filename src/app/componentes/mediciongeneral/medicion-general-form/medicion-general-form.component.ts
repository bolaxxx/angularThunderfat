import { Component, OnInit, Inject } from '@angular/core';
import { MedicionGeneral } from '../../../model/medicion-general';
import { MedicionGeneralService } from '../../../service/medicion-general.service';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { Paciente } from 'src/app/model/paciente';

@Component({
  selector: 'app-medicion-general-form',
  templateUrl: './medicion-general-form.component.html',
  styleUrls: ['./medicion-general-form.component.sass']
})
export class MedicionGeneralFormComponent implements OnInit {

  constructor(@Inject (MAT_BOTTOM_SHEET_DATA) public data: any,
              private bottomSheetRef: MatBottomSheetRef, private medicionservice: MedicionGeneralService) { }
  public medicion: MedicionGeneral = new MedicionGeneral();
  public  isNew = true;
  ngOnInit() {
    if ( this.data.isNew === false ) {
      this.medicionservice.getMedicionByid(this.data.id).subscribe(
        medicion => this.medicion = medicion);
      this.isNew = false;
      } else {
        this.isNew = true;
        this.medicion = new MedicionGeneral();
      }
  }

  public guardarMedicion(): void{
    console.log(JSON.stringify(this.medicion) + ' from paciente save');
    this.medicionservice.guardarMedicion(this.medicion, this.data.idpaciente).subscribe(response =>  console.log(response));
    this.bottomSheetRef.dismiss();
}
  public GuardarEdicion(): void{
  console.log(JSON.stringify(this.medicion) + ' desde guardar Edicion' );
  this.medicionservice.updateMedicicion(this.medicion).subscribe(response=> console.log(response));
  this.bottomSheetRef.dismiss();
}

public Eliminar():void{
  console.log(this.medicion.id+ 'el id que pasa en el metodo borrar');
  this.medicionservice.eliminarMedicion(this.medicion.id).subscribe(response=>console.log(response));
  this.bottomSheetRef.dismiss();
}
}
