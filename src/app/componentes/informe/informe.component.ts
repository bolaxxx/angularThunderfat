import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { Paciente } from '../../model/paciente';
import { MedicionGeneral } from '../../model/medicion-general';
import { MedicionGeneralService } from '../../service/medicion-general.service';
import { MedicionEspecifica } from 'src/app/model/medicion-especifica';
import { MedicionSegmental } from '../../model/medicion-segmental';
import { AntecedenteClinicos } from '../../model/antecedente-clinicos';
import { AntecedenteTratamiento } from '../../model/antecedente-tratamiento';
import { MedicionsegmentalService } from '../../service/medicionsegmental.service';
import { MedicionespecificaService } from 'src/app/service/medicionespecifica.service';
import { AntecedentetratamientoService } from '../../service/antecedentetratamiento.service';
import { AntecedenteclinicoService } from 'src/app/service/antecedenteclinico.service';

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.sass']
})
export class InformeComponent implements OnInit, OnChanges {
  constructor(private mediciongeneralService: MedicionGeneralService,
              private medicionsegmentalservice: MedicionsegmentalService,
              private medicionespecificaservice: MedicionespecificaService,
              private antecedentetratamientoservice: AntecedentetratamientoService,
              private antecedenteclinicoservice: AntecedenteclinicoService) {
    this.formdatos = false;
  }
  @Input() pacienteIn: Paciente;
  @Output() pacienteEdited = new EventEmitter<Paciente>();
  paciente: Paciente = new Paciente();
  formdatos: boolean;
  formMedicionGeneneral: boolean;
  formMedicionEspecifica: boolean;
  formMedicionSegmental: boolean;
  formAntecedenteClinico: boolean;
  formAntecedenteTratamiento: boolean;
  pacienteid: number;
  mediciongeneralseleccionada: MedicionGeneral;
  medicionespecificaseleccionada: MedicionEspecifica;
  medicionsegementalseleccionada: MedicionSegmental;
  antecedenteclinicoSelecionado: AntecedenteClinicos;
  antecedentetratamientoselecionado: AntecedenteTratamiento;
  isMedicionGeneralNew: boolean;
  isMedicionSegementallNew: boolean;
  isMedicionEspecificaNew: boolean;
  isAntecedenteTratamientolNew: boolean;
  isAntecedenteClinicoNew: boolean;
  ngOnInit() {
    this.formdatos = false;
    this.formMedicionGeneneral = false;
    this.formMedicionSegmental = false;
    this.formMedicionEspecifica = false;
    this.formAntecedenteClinico = false;
    this.formAntecedenteTratamiento = false;
    this.pacienteid = this.pacienteIn.id;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('cambios informe component ' + JSON.stringify(changes));
    if (changes.pacienteIn.isFirstChange()) {
      this.paciente = changes.pacienteIn.currentValue;
    } else {
      this.paciente = new Paciente();
      this.paciente = changes.pacienteIn.currentValue;
      this.formdatos = false;
      this.formMedicionGeneneral = false;
      this.formMedicionSegmental = false;
      this.formMedicionEspecifica = false;
      this.formAntecedenteClinico = false;
      this.formAntecedenteTratamiento = false;
    }

  }
  verDatosPersonales(): void {
    this.pacienteid = this.paciente.id;
    this.formdatos = true;
  }
  procesaPropagar(mensaje) {
    console.log(mensaje);
    this.formdatos = false;
  }
  /** medicion general funciones  */
  seleccionarMedicionGeneral(medicion): void {
    console.log(medicion);
    this.mediciongeneralseleccionada = medicion;
    this.formMedicionGeneneral = true;
    this.isMedicionGeneralNew = false;
  }
  nuevaMedicionGeneral(antecedenteclinicoform: HTMLElement): void {
    this.mediciongeneralseleccionada = new MedicionGeneral();
    this.formMedicionGeneneral = true;
    this.isMedicionGeneralNew = true;
    this.scroll(antecedenteclinicoform);
  }
  editarMedicionGeneral(medicion): void {
    const i = this.paciente.medicionesgenerales.findIndex(
      temp => temp.id === medicion.id
    );
    this.paciente.medicionesgenerales[i] = medicion;
    this.formMedicionGeneneral = false;
    this.pacienteEdited.emit(this.paciente);
  }
  discardMedicionGeneral($event): void {
    this.formMedicionGeneneral = false;
  }
  addMedicionGeneral(medicion): void {
    this.mediciongeneralService
      .guardarMedicion(medicion, this.paciente.id)
      .subscribe(response => {
        this.paciente.medicionesgenerales.push(response);
        this.formMedicionGeneneral = false;
        this.pacienteEdited.emit(this.paciente);
      });
  }
  deleteMedicionGeneral(borrado) {
    this.paciente.medicionesgenerales.splice(
      this.paciente.medicionesgenerales.findIndex(e => e.id === borrado),
      1
    );
    this.formMedicionGeneneral = false;
    this.pacienteEdited.emit(this.paciente);

  }
   /** medicion Segmental funciones  */
   seleccionarMedicionSegemental(medicion): void {
    this.medicionsegementalseleccionada = medicion;
    this.formMedicionSegmental = true;
    this.isMedicionSegementallNew = false;
  }
  nuevaMedicionSegmental(antecedenteclinicoform: HTMLElement): void {
    this.medicionsegementalseleccionada = new MedicionSegmental();
    this.formMedicionSegmental = true;
    this.isMedicionSegementallNew = true;
    this.scroll(antecedenteclinicoform);
  }
  editarMedicionSegmental(medicion): void {
    const i = this.paciente.medicionessegmentales.findIndex(
      temp => temp.id === medicion.id
    );
    this.paciente.medicionessegmentales[i] = medicion;
    this.formMedicionSegmental = false;
    this.pacienteEdited.emit(this.paciente);
  }
  discardMedicionSegmental($event): void {
    this.formMedicionSegmental = false;
  }
  addMedicionSegmental(medicion): void {
    this.medicionsegmentalservice
      .guardarMedicion(medicion, this.paciente.id)
      .subscribe(response => {
        this.paciente.medicionessegmentales.push(response);
        this.formMedicionSegmental  = false;
        this.pacienteEdited.emit(this.paciente);
      });
  }
  deleteMedicionSegmental(borrado) {
    this.paciente.medicionessegmentales.splice(
      this.paciente.medicionessegmentales.findIndex(e => e.id === borrado),
      1
    );
    this.formMedicionSegmental = false;
    this.pacienteEdited.emit(this.paciente);

  }


   /** medicion Especifica funciones  */
   seleccionarMedicionEspecifica(medicion): void {
    this.medicionespecificaseleccionada = medicion;
    this.formMedicionEspecifica = true;
    this.isMedicionEspecificaNew = false;
  }
  nuevaMedicionEspecifica(antecedenteclinicoform: HTMLElement): void {
    this.medicionespecificaseleccionada = new MedicionEspecifica();
    this.formMedicionEspecifica = true;
    this.isMedicionEspecificaNew = true;
    this.scroll(antecedenteclinicoform);
  }
  editarMedicionEspecifica(medicion): void {
    const i = this.paciente.medicionesespecificas.findIndex(
      temp => temp.id === medicion.id
    );
    this.paciente.medicionesespecificas[i] = medicion;
    this.formMedicionEspecifica = false;
    this.pacienteEdited.emit(this.paciente);
  }
  discardMedicionEspecifica($event): void {
    this.formMedicionEspecifica = false;
  }
  addMedicionEspecifica(medicion): void {
    this.medicionespecificaservice
      .guardarMedicion(medicion, this.paciente.id)
      .subscribe(response => {
        this.paciente.medicionesespecificas.push(response);
        this.formMedicionEspecifica  = false;
        this.pacienteEdited.emit(this.paciente);
      });
  }
  deleteMedicionEspecifica(borrado) {
    this.paciente.medicionesespecificas.splice(
      this.paciente.medicionesespecificas.findIndex(e => e.id === borrado),
      1
    );
    this.formMedicionEspecifica = false;
    this.pacienteEdited.emit(this.paciente);

  }
   /** Antecedentes Tratamiento funciones  */
   seleccionarAntecedenteTratamiento(medicion): void {
    this.antecedentetratamientoselecionado = medicion;
    this.formAntecedenteTratamiento = true;
    this.isAntecedenteTratamientolNew = false;
  }
  nuevaAntecedenteTratamiento(antecedenteclinicoform: HTMLElement): void {
    this.antecedentetratamientoselecionado = new AntecedenteTratamiento();
    this.formAntecedenteTratamiento = true;
    this.isAntecedenteTratamientolNew = true;
    this.scroll(antecedenteclinicoform);

  }
  editarAntecedenteTratamiento(medicion): void {
    const i = this.paciente.antecedentestratamientos.findIndex(
      temp => temp.id === medicion.id
    );
    this.paciente.antecedentestratamientos[i] = medicion;
    this.formAntecedenteTratamiento = false;
    this.pacienteEdited.emit(this.paciente);
  }
  discardAntecedenteTratamiento($event): void {
    this.formAntecedenteTratamiento = false;
  }
  addAntecedenteTratamiento(medicion): void {
    this.antecedentetratamientoservice
      .guardarMedicion(medicion, this.paciente.id)
      .subscribe(response => {
        this.paciente.antecedentestratamientos.push(response);
        this.formAntecedenteTratamiento  = false;
        this.pacienteEdited.emit(this.paciente);
      });
  }
  deleteAntecedenteTratamiento(borrado) {
    this.paciente.antecedentestratamientos.splice(
      this.paciente.antecedentestratamientos.findIndex(e => e.id === borrado),
      1
    );
    this.formAntecedenteTratamiento = false;
    this.pacienteEdited.emit(this.paciente);

  }

     /** Antecedentes Clinicos funciones  */
     seleccionarAntecedenteClinicos(medicion): void {
      this.antecedenteclinicoSelecionado = medicion;
      this.formAntecedenteClinico = true;
      this.isAntecedenteClinicoNew = false;
    }
    nuevaAntecedenteClinicos(antecedenteclinicoform: HTMLElement): void {
      this.antecedenteclinicoSelecionado = new AntecedenteTratamiento();
      this.formAntecedenteClinico = true;
      this.isAntecedenteClinicoNew = true;
      this.scroll(antecedenteclinicoform);
      
    }
    editarAntecedenteClinicos(medicion): void {
      const i = this.paciente.antecedentesclinicos.findIndex(
        temp => temp.id === medicion.id
      );
      this.paciente.antecedentesclinicos[i] = medicion;
      this.formAntecedenteClinico = false;
      this.pacienteEdited.emit(this.paciente);
    }
    discardAntecedenteClinicos($event): void {
      this.formAntecedenteClinico = false;
    }
    addAntecedenteClinicos(medicion): void {
      
      this.antecedenteclinicoservice
        .guardarMedicion(medicion, this.paciente.id)
        .subscribe(response => {
          this.paciente.antecedentesclinicos.push(response);
          this.formAntecedenteClinico  = false;
          this.pacienteEdited.emit(this.paciente);
        });
    }
    deleteAntecedenteClinicos(borrado) {
      this.paciente.antecedentesclinicos.splice(
        this.paciente.antecedentesclinicos.findIndex(e => e.id === borrado),
        1
      );
      this.formAntecedenteClinico = false;
      this.pacienteEdited.emit(this.paciente);
  
    }
    scroll(id: HTMLElement) {
      console.log(`scrolling to ${id}`);
      //let el = document.getElementById(id);
      id.scrollIntoView();
    }
    deletePlandieta(borrado) {
      this.paciente.planesdieta.splice(
        this.paciente.planesdieta.findIndex(e => e.id === borrado),
        1
      );
      this.pacienteEdited.subscribe(this.paciente);
    }
}
