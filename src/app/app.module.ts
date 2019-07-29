import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './usuarios/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FindNutricionistaComponent } from './find-nutricionista/find-nutricionista.component';
import { PacienteComponent } from './paciente/paciente.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { AlimentoServiceService } from './service/alimento-service.service';
import { AlimentoformComponent } from './componentes/alimentoform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatBottomSheet,
  MatBottomSheetModule,
  MatCardModule,
  MatMenuModule,
  MatTableDataSource,
  MatListModule,
  MatTableModule,
  MatSortModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatDialogModule
} from '@angular/material';
import { PacienteformComponent } from './componentes/pacienteform/pacienteform.component';
import { PacienteService } from './service/paciente.service';
import { MediciongeneralComponent } from './componentes/mediciongeneral/mediciongeneral.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MedicionGeneralService } from './service/medicion-general.service';
import { MedicionGeneralFormComponent } from './componentes/mediciongeneral/medicion-general-form/medicion-general-form.component';
import { Grafica1Component } from './componentes/mediciongeneral/grafica1/grafica1.component';
import { CitaComponent } from './cita/cita.component';
import { FullCalendarModule } from '@fullcalendar/angular';

import { MedicionsegmentalComponent } from './componentes/medicionsegmental/medicionsegmental.component';
import { MedicionespecificaComponent } from './componentes/medicionespecifica/medicionespecifica.component';
import { AntecedenteclinicoComponent } from './componentes/antecedenteclinico/antecedenteclinico.component';
import { AntecedentetratamientoComponent } from './componentes/antecedentetratamiento/antecedentetratamiento.component';
import { AntecedenteclinicoformComponent } from './componentes/antecedenteclinico/antecedenteclinicoform/antecedenteclinicoform.component';
import { AntecedentetratamientoformComponent } from './componentes/antecedentetratamiento/antecedentetratamientoform/antecedentetratamientoform.component';
import { Grafica1especificaComponent } from './componentes/medicionespecifica/grafica1especifica/grafica1especifica.component';
import { Grafica2especificaComponent } from './componentes/medicionespecifica/grafica2especifica/grafica2especifica.component';
import { MedicionespecificaformComponent } from './componentes/medicionespecifica/medicionespecificaform/medicionespecificaform.component';
import { FiltroalimentarioComponent } from './filtroalimentario/filtroalimentario.component';
import { PlatospredeterminadoComponent } from './platospredeterminado/platospredeterminado.component';
import { MedicionSegmentalFormComponent } from './componentes/medicionsegmental/medicion-segmental-form/medicion-segmental-form.component';
import { AntecedenteclinicoService } from './service/antecedenteclinico.service';
import { AntecedentetratamientoService } from './service/antecedentetratamiento.service';
import { MedicionsegmentalService } from './service/medicionsegmental.service';
import { CitaformComponent } from './cita/citaform/citaform.component';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material';
import { FiltroalimentarioformComponent } from './filtroalimentario/filtroalimentarioform/filtroalimentarioform.component';
import { FiltroalimentarioService } from './service/filtroalimentario.service';
import { PlatopredeterminadoformComponent } from './platospredeterminado/platopredeterminadoform/platopredeterminadoform.component';
import { PlandietaComponent } from './plandieta/plandieta.component';
import { PlandietaformComponent } from './plandieta/plandietaform/plandietaform.component';
import { DiadietaComponent } from './componentes/plandieta/diadieta/diadieta.component';
import { ComidaComponent } from './componentes/plandieta/comida/comida.component';
import { PlatoplandietaComponent } from './componentes/plandieta/platoplandieta/platoplandieta.component';
import { PlandietaService } from './service/plandieta.service';
import { InformeComponent } from './componentes/informe/informe.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    FindNutricionistaComponent,
    PacienteComponent,
    AlimentosComponent,
    AlimentoformComponent,
    PacienteformComponent,
    MediciongeneralComponent,
    MedicionGeneralFormComponent,
    Grafica1Component,
    CitaComponent,
    MedicionsegmentalComponent,
    MedicionespecificaComponent,
    AntecedenteclinicoComponent,
    AntecedentetratamientoComponent,
    AntecedenteclinicoformComponent,
    AntecedentetratamientoformComponent,
    Grafica1especificaComponent,
    Grafica2especificaComponent,
    MedicionespecificaformComponent,
    FiltroalimentarioComponent,
    PlatospredeterminadoComponent,
    MedicionSegmentalFormComponent,
    CitaformComponent,
    FiltroalimentarioformComponent,
    PlatopredeterminadoformComponent,
    PlandietaComponent,
    PlandietaformComponent,
    DiadietaComponent,
    ComidaComponent,
    PlatoplandietaComponent,
    InformeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    ChartsModule,
    FullCalendarModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatListModule
  ],
  providers: [
    PacienteService,
    AlimentoServiceService,
    MedicionGeneralService,
    AntecedenteclinicoService,
    AntecedentetratamientoService,
    MedicionsegmentalService,
    FiltroalimentarioService,
    PlandietaService
  ],
  entryComponents: [
    AlimentoformComponent,
    PacienteformComponent,
    MedicionGeneralFormComponent,
    MedicionespecificaformComponent,
    MedicionSegmentalFormComponent,
    AntecedenteclinicoformComponent,
    AntecedentetratamientoformComponent,
    CitaformComponent,
    FiltroalimentarioformComponent,
    PlatopredeterminadoformComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
