import { Component, OnInit, Inject, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { AntecedenteclinicoService } from '../../../service/antecedenteclinico.service';
import { AntecedenteClinicos } from '../../../model/antecedente-clinicos';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-antecedenteclinicoform',
  templateUrl: './antecedenteclinicoform.component.html',
  styleUrls: ['./antecedenteclinicoform.component.sass']
})
export class AntecedenteclinicoformComponent implements OnInit {

  constructor( private medicionservice: AntecedenteclinicoService) { }
  @Input() antecedente: AntecedenteClinicos = new AntecedenteClinicos();
  @Input() isNew = true;
  @Output() discard = new EventEmitter<any>();
  @Output() added = new EventEmitter<AntecedenteClinicos>();
  @Output() edited = new EventEmitter<AntecedenteClinicos>();
  @Output() deleted = new EventEmitter<number>();
  ngOnInit() {
  }
  public guardarMedicion(): void{
    console.log(JSON.stringify(this.antecedente) + ' from paciente save');
    this.added.emit(this.antecedente);
}
  public GuardarEdicion(): void{
  console.log(JSON.stringify(this.antecedente) + ' desde guardar Edicion' );
  this.medicionservice.updateMedicicion(this.antecedente).subscribe(response => {console.log(response);
                                                                                 this.edited.emit(this.antecedente);
  });
//  this.bottomSheetRef.dismiss();
}

public Eliminar(): void{
  console.log(this.antecedente.id + 'el id que pasa en el metodo borrar');
  this.medicionservice.eliminarMedicion(this.antecedente.id).subscribe(response => {console.log(response);
                                                                                    this.deleted.emit(this.antecedente.id);
});
  //this.bottomSheetRef.dismiss();
}
public close(){
  this.discard.emit('close');
}
ngOnChanges(changes: SimpleChanges): void {
 
}
}
