import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './usuarios/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FindNutricionistaComponent } from './find-nutricionista/find-nutricionista.component';
import { PacienteComponent } from './paciente/paciente.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { AlimentoServiceService } from './service/alimento-service.service';
import { AlimentoformComponent } from './componentes/alimentoform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatBottomSheet, MatBottomSheetModule, MatCardModule, MatMenuModule,
   MatTableDataSource, MatTableModule, MatSortModule, MatInputModule ,MatSelectModule, MatIconModule} from '@angular/material';
import { PacienteformComponent } from './componentes/pacienteform/pacienteform.component';
import { PacienteService } from './service/paciente.service';
import { MediciongeneralComponent } from './componentes/mediciongeneral/mediciongeneral.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MedicionGeneralService } from './service/medicion-general.service';
import { MedicionGeneralFormComponent } from './componentes/mediciongeneral/medicion-general-form/medicion-general-form.component';
import { Grafica1Component } from './componentes/mediciongeneral/grafica1/grafica1.component';
import { CitaComponent } from './cita/cita.component';
import { FullCalendarModule } from '@fullcalendar/angular';

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
    CitaComponent
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
    MatIconModule
  ],
  providers: [PacienteService, AlimentoServiceService, MedicionGeneralService],
  entryComponents: [AlimentoformComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
