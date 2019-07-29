import { Component, OnInit, Inject } from '@angular/core';
import { MedicionSegmental } from '../../../model/medicion-segmental';
import { MedicionsegmentalService } from '../../../service/medicionsegmental.service';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-medicion-segmental-form',
  templateUrl: './medicion-segmental-form.component.html',
  styleUrls: ['./medicion-segmental-form.component.sass']
})
export class MedicionSegmentalFormComponent implements OnInit {

  constructor(@Inject (MAT_BOTTOM_SHEET_DATA) public data: any,
              private bottomSheetRef: MatBottomSheetRef, private medicionservice: MedicionsegmentalService) { }
public medicion: MedicionSegmental = new MedicionSegmental();
public  isNew = true;

  ngOnInit() {
    if ( this.data.isNew === false ) {
      this.medicionservice.getMedicionByid(this.data.id).subscribe(
        medicion => this.medicion = medicion);
      this.isNew = false;
      } else {
        this.isNew = true;
        this.medicion = new MedicionSegmental();
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


