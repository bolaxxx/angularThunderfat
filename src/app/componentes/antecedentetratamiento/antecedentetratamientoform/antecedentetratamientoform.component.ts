import { Component, OnInit, Inject } from '@angular/core';
import { AntecedentetratamientoService } from '../../../service/antecedentetratamiento.service';
import { AntecedenteTratamiento } from '../../../model/antecedente-tratamiento';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-antecedentetratamientoform',
  templateUrl: './antecedentetratamientoform.component.html',
  styleUrls: ['./antecedentetratamientoform.component.sass']
})
export class AntecedentetratamientoformComponent implements OnInit {

  constructor(@Inject (MAT_BOTTOM_SHEET_DATA) public data: any,
              private bottomSheetRef: MatBottomSheetRef, private medicionservice: AntecedentetratamientoService) { }
  public antecedente: AntecedenteTratamiento = new AntecedenteTratamiento();
  public  isNew = true;
  ngOnInit() {
    if ( this.data.isNew === false ) {
      this.medicionservice.getMedicionByid(this.data.id).subscribe(
        antecedente => this.antecedente = antecedente);
      this.isNew = false;
      } else {
        this.isNew = true;
        this.antecedente = new AntecedenteTratamiento();
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
