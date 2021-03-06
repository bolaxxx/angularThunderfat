import {
  Component,
  OnInit,
  Inject,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';
import { PacienteService } from 'src/app/service/paciente.service';
import { Paciente } from 'src/app/model/paciente';

@Component({
  selector: 'app-pacienteform',
  templateUrl: './pacienteform.component.html',
  styleUrls: ['./pacienteform.component.sass']
})
export class PacienteformComponent implements OnInit {


  constructor(private pacinteservice: PacienteService) {}
  @Input() pacienteid: number;
  @Input() isNew: boolean;
  @Output() evento = new EventEmitter<string>();
  paciente: Paciente;
  ngOnInit() {
     console.log(JSON.stringify(this.pacienteid) + ' esto es el id del com ponente');
     if (this.isNew === false) {
      this.pacinteservice
        .getPacienteByid(this.pacienteid)
        .subscribe(paciente => (this.paciente = paciente));
      this.isNew = false;
    } else {
      this.isNew = true;
      this.paciente = new Paciente();
    }
  }
  public isNewPaciente(): boolean {
    if (this.isNew === true) {
      return true;
    } else {
      return false;
    }
  }
  public guardarPaciente(): void {
    console.log(JSON.stringify(this.paciente) + ' from paciente save');
    this.pacinteservice.guardarPaciente(this.paciente).subscribe(response => {
      console.log(response);
      this.evento.emit('save');
    });
    // this.bottomSheetRef.dismiss();
  }
  public GuardarEdicion(): void {
    console.log(JSON.stringify(this.paciente) + ' desde guardar Edicion');
    this.pacinteservice
      .updatePaciente(this.paciente)
      .subscribe(response => console.log(response));
    // this.bottomSheetRef.dismiss();
  }

  public Eliminar(): void {
    console.log(this.paciente.id + 'el id que pasa en el metodo borrar');
    this.pacinteservice
      .eliminarPaciente(this.paciente.id)
      .subscribe(response => console.log(response + ' respuesta recibida'));
    // this.bottomSheetRef.dismiss();
  }
  public dismiss(): void {

      this.evento.emit('close');
  }
}
