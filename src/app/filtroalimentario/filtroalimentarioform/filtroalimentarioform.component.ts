import { Component, OnInit, Inject } from '@angular/core';
import { FiltroAlimentario } from '../../model/filtro-alimentario';
import { element } from 'protractor';
import { Alimento } from '../../model/alimento';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatAutocompleteModule,
  MatInputModule
} from '@angular/material';
import { AlimentoServiceService } from '../../service/alimento-service.service';
import { FiltroalimentarioService } from '../../service/filtroalimentario.service';
import { AuthService } from 'src/app/service/auth.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-filtroalimentarioform',
  templateUrl: './filtroalimentarioform.component.html',
  styleUrls: ['./filtroalimentarioform.component.sass']
})
export class FiltroalimentarioformComponent implements OnInit {
  stateCtrl = new FormControl();
  filteredAlimentos: Observable<Alimento[]>;
  filtroalimnetario: FiltroAlimentario = new FiltroAlimentario();
  alimentos: Alimento[] = [];
  isNew: boolean=true;
  constructor(
    public dialogRef: MatDialogRef<FiltroalimentarioformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    matautoComplete: MatAutocompleteModule,
    matInput: MatInputModule,
    private alimentoService: AlimentoServiceService,
    private filtroalimentarioService: FiltroalimentarioService,
    private authService: AuthService
  ) {
    this.filteredAlimentos = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(state => (state ? this._filterStates(state) : this.alimentos.slice()))
    );
  }

  ngOnInit() {
    this.alimentoService
      .getAlimentos()
      .subscribe(response => (this.alimentos = response));
    if(this.data.isNew==false){
        this.filtroalimentarioService.getPacienteByid(this.data.id).subscribe(response =>{
          this.filtroalimnetario = response;
          this.filtroalimnetario.alimentos = response.alimentos;
          console.log(JSON.stringify(response)+' alimentos en response');
        } );
        this.isNew = false;
      }else{
        this.isNew= true;
      }
  }

  borrarAlimento(id: number): void {
    let i = 0;
    for (let ele = 0; ele < this.filtroalimnetario.alimentos.length; ele++) {
      if (this.filtroalimnetario.alimentos[ele].id === id) {
        this.filtroalimnetario.alimentos.splice(ele, 1);

      }
    }
  }
  displayFn(options: Alimento[]): (id: number) => string {
    return (id: number) => {
      const correspondingOption = Array.isArray(options)
        ? options.find(option => option.id === id)
        : null;
      return correspondingOption ? correspondingOption.nombre : '';
    };
  }
  addalimento(): void {
    let i = 0;
    while (i < this.alimentos.length) {
      if (this.stateCtrl.value === this.alimentos[i].id) {
        if (
          this.filtroalimnetario.alimentos.includes(this.alimentos[i]) === false
        ) {
          this.filtroalimnetario.alimentos.push(this.alimentos[i]);
          i = this.alimentos.length;
        } else {
          swal.fire('Error', 'Alimento ya añadido al filtro ', 'error');
        }
      }
      i++;
    }
  }
  private _filterStates(value: string): Alimento[] {
    const filterValue = value;
    //.toLowerCase();

    return this.alimentos.filter(
      alimento => alimento.nombre.toLowerCase().indexOf(filterValue) === 0
    );
  }
  guardarFiltro(){
    this.filtroalimentarioService.guardarFiltro(this.filtroalimnetario).subscribe(response=> console.log(response));
    this.dialogRef.close();
  }
  eliminarFiltro( ){
    this.filtroalimentarioService.borrarCita(this.filtroalimnetario.id).subscribe(response=> console.log(response));
    this.dialogRef.close();
  }
}
