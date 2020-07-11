import { Component, OnInit, Inject } from '@angular/core';
import { Paciente } from '../../model/paciente';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInput, MatInputModule } from '@angular/material/input';
import { FormControl } from '@angular/forms';
import { PacienteService } from '../../service/paciente.service';
import { CitaService } from '../../service/cita.service';
import { AuthService } from '../../service/auth.service';
import { Cita } from 'src/app/model/cita';

@Component({
  selector: 'app-citaform',
  templateUrl: './citaform.component.html',
  styleUrls: ['./citaform.component.sass']
})
export class CitaformComponent implements OnInit {

  stateCtrl = new FormControl();
  filteredPaciente: Observable<Paciente[]>;
  pacientes: Paciente[] = [];
  cita: Cita = new Cita();
  isNew : boolean;
  constructor( public dialogRef: MatDialogRef<CitaformComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any , matautoComplete: MatAutocompleteModule, matInput: MatInputModule,
               private pacienteService: PacienteService, private citaService: CitaService, private authService: AuthService) {
    this.filteredPaciente = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.pacientes.slice())
      );
   }

  ngOnInit() {
    this.pacienteService.getPacientes(this.authService.getusuario().id).subscribe(response => this.pacientes = response);
    console.log(this.data.isNew + 'cita is new');
    if (this.data.isNew ===  false) {
      console.log('paso por el if inicial');
      this.citaService.getPacienteByid(this.data.id).subscribe(response => {
          console.log(JSON.stringify(response) + 'cita ');
          this.cita = response;
          console.log(JSON.stringify(this.cita) + 'cita en el init');
          this.isNew = false;
          this.stateCtrl.setValue(response.paciente.id); });
    } else {
    this.cita = new Cita();
    this.isNew = true;

    }
  }
  private _filterStates(value: string): Paciente[] {
    const filterValue = value;
    //.toLowerCase();

    return this.pacientes.filter(paciente => paciente.nombre.toLowerCase().indexOf(filterValue) === 0);
  }
  spy(){
    this.stateCtrl.setValue(3);
    console.log(JSON.stringify(this.stateCtrl.value) + ' cita form');
  }
  displayFn(options: Paciente[]): (id: number) => string {
    return (id: number) => { 
      const correspondingOption = Array.isArray(options) ? options.find(option => option.id === id) : null;
      return correspondingOption ? (correspondingOption.nombre + ' ' + correspondingOption.apellidos  ) : '';
    }
  }
  public guardarCita(): void{
  this.cita.paciente= this.pacientes.find(paciente=> paciente.id===this.stateCtrl.value);
  console.log(this.cita);
  this.citaService.guardarCita(this.cita).subscribe(response => console.log(response));
  this.dialogRef.close();
  }
  public Eliminar(): void{
    console.log(this.cita.id+'cita a eliminar');
    this.citaService.borrarCita(this.cita.id).subscribe(response => console.log(response));
    this.dialogRef.close();

  }
  public  GuardarEdicion(): void{

  }
}
