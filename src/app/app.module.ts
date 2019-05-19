import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './usuarios/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteService } from './service/cliente.service';
import {FormsModule} from '@angular/forms';
import { FindNutricionistaComponent } from './find-nutricionista/find-nutricionista.component';
import { PacienteComponent } from './paciente/paciente.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { AlimentoServiceService } from './service/alimento-service.service';
import { AlimentoformComponent } from './componentes/alimentoform.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    FindNutricionistaComponent,
    PacienteComponent,
    AlimentosComponent,
    AlimentoformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClienteService, AlimentoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
