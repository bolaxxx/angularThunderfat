import { Component, OnInit, Inject, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { MedicionSegmental } from '../../../model/medicion-segmental';
import { MedicionsegmentalService } from '../../../service/medicionsegmental.service';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-medicion-segmental-form',
  templateUrl: './medicion-segmental-form.component.html',
  styleUrls: ['./medicion-segmental-form.component.sass']
})
export class MedicionSegmentalFormComponent implements OnInit ,OnChanges{

  constructor( private medicionservice: MedicionsegmentalService) { }
@Input() medicion: MedicionSegmental = new MedicionSegmental();
@Input() isNew = true;
@Output() discard = new EventEmitter<any>();
@Output() added = new EventEmitter<MedicionSegmental>();
@Output() edited = new EventEmitter<MedicionSegmental>();
@Output() deleted = new EventEmitter<number>();


  ngOnInit() {
  
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


