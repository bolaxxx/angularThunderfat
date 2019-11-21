import { Component, OnInit, Inject, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { MedicionGeneral } from '../../../model/medicion-general';
import { MedicionGeneralService } from '../../../service/medicion-general.service';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { Paciente } from 'src/app/model/paciente';

@Component({
  selector: 'app-medicion-general-form',
  templateUrl: './medicion-general-form.component.html',
  styleUrls: ['./medicion-general-form.component.sass']
})
export class MedicionGeneralFormComponent implements OnInit , OnChanges {


  constructor( private medicionservice: MedicionGeneralService) { }
  @Input() medicion: MedicionGeneral
  @Input() isNew: boolean ;
  @Output() discard = new EventEmitter<any>();
  @Output() added = new EventEmitter<MedicionGeneral>();
  @Output() edited = new EventEmitter<MedicionGeneral>();
  @Output() deleted = new EventEmitter<number>();

  ngOnInit() {
    /*if ( this.data.isNew === false ) {
      this.medicionservice.getMedicionByid(this.data.id).subscribe(
        medicion => this.medicion = medicion);
      this.isNew = false;
      } else {
        this.isNew = true;
        this.medicion = new MedicionGeneral();
      }
      */
  }

  public guardarMedicion(): void{
    console.log(JSON.stringify(this.medicion) + ' from paciente save');
    this.added.emit(this.medicion);
}
  public GuardarEdicion(): void{
  console.log(JSON.stringify(this.medicion) + ' desde guardar Edicion' );
  this.medicionservice.updateMedicicion(this.medicion).subscribe(response => {console.log(response);
                                                                              this.edited.emit(this.medicion);
  });
//  this.bottomSheetRef.dismiss();
}

public Eliminar(): void{
  console.log(this.medicion.id + 'el id que pasa en el metodo borrar');
  this.medicionservice.eliminarMedicion(this.medicion.id).subscribe(response => {console.log(response);
                                                                                 this.deleted.emit(this.medicion.id);
});
  //this.bottomSheetRef.dismiss();
}
public close(){
  this.discard.emit('close');
}
ngOnChanges(changes: SimpleChanges): void {
 
}
}
