import { Component, OnInit, Inject, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { MedicionespecificaService } from '../../../service/medicionespecifica.service';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { MedicionEspecifica } from '../../../model/medicion-especifica';

@Component({
  selector: 'app-medicionespecificaform',
  templateUrl: './medicionespecificaform.component.html',
  styleUrls: ['./medicionespecificaform.component.sass']
})
export class MedicionespecificaformComponent implements OnInit {

  constructor( private medicionEspecificaService: MedicionespecificaService
               ) { }
  @Input() medicion: MedicionEspecifica = new MedicionEspecifica();
  @Input ()  isNew = true;
  @Output() discard = new EventEmitter<any>();
  @Output() added = new EventEmitter<MedicionEspecifica>();
  @Output() edited = new EventEmitter<MedicionEspecifica>();
  @Output() deleted = new EventEmitter<number>();
  ngOnInit() {
   
  }
  public guardarMedicion(): void{
    console.log(JSON.stringify(this.medicion) + ' from paciente save');
    this.added.emit(this.medicion);
}
  public GuardarEdicion(): void{
  console.log(JSON.stringify(this.medicion) + ' desde guardar Edicion' );
  this.medicionEspecificaService.updateMedicicion(this.medicion).subscribe(response => {console.log(response);
                                                                                        this.edited.emit(this.medicion);
  });
//  this.bottomSheetRef.dismiss();
}

public Eliminar(): void{
  console.log(this.medicion.id + 'el id que pasa en el metodo borrar');
  this.medicionEspecificaService.eliminarMedicion(this.medicion.id).subscribe(response => {console.log(response);
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
