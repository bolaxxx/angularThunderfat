import { Component, OnInit, Inject } from '@angular/core';
import { MedicionespecificaService } from '../../../service/medicionespecifica.service';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { MedicionEspecifica } from '../../../model/medicion-especifica';

@Component({
  selector: 'app-medicionespecificaform',
  templateUrl: './medicionespecificaform.component.html',
  styleUrls: ['./medicionespecificaform.component.sass']
})
export class MedicionespecificaformComponent implements OnInit {

  constructor(@Inject (MAT_BOTTOM_SHEET_DATA) public data: any, private medicionEspecificaService: MedicionespecificaService,
              private bottomSheetRef: MatBottomSheetRef ) { }
  public medicion: MedicionEspecifica = new MedicionEspecifica();
  public  isNew = true;
  ngOnInit() {
    if ( this.data.isNew === false ) {
      this.medicionEspecificaService.getMedicionByid(this.data.id).subscribe(
        medicion => this.medicion = medicion);
      this.isNew = false;
      } else {
        this.isNew = true;
        this.medicion =  new MedicionEspecifica();
      }
  }
  public guardarMedicion(): void{
    console.log(JSON.stringify(this.medicion) + ' from paciente save');
    this.medicionEspecificaService.guardarMedicion(this.medicion, this.data.idpaciente).subscribe(response =>  console.log(response));
    this.bottomSheetRef.dismiss();
}
  public GuardarEdicion(): void{
  console.log(JSON.stringify(this.medicion) + ' desde guardar Edicion' );
  this.medicionEspecificaService.updateMedicicion(this.medicion).subscribe(response=> console.log(response));
  this.bottomSheetRef.dismiss();
}

public Eliminar():void{
  console.log(this.medicion.id+ 'el id que pasa en el metodo borrar');
  this.medicionEspecificaService.eliminarMedicion(this.medicion.id).subscribe(response=>console.log(response));
  this.bottomSheetRef.dismiss();
}
}
