import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './usuarios/login.component';
import { FindNutricionistaComponent } from './find-nutricionista/find-nutricionista.component';
import { PacienteComponent } from './paciente/paciente.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { MediciongeneralComponent } from './componentes/mediciongeneral/mediciongeneral.component';
import { CitaComponent } from './cita/cita.component';
import { MedicionespecificaComponent } from './componentes/medicionespecifica/medicionespecifica.component';
import { AntecedenteclinicoComponent } from './componentes/antecedenteclinico/antecedenteclinico.component';
import { AntecedentetratamientoComponent } from './componentes/antecedentetratamiento/antecedentetratamiento.component';
import { MedicionsegmentalComponent } from './componentes/medicionsegmental/medicionsegmental.component';
import { FiltroalimentarioComponent } from './filtroalimentario/filtroalimentario.component';
import { PlatospredeterminadoComponent } from './platospredeterminado/platospredeterminado.component';
import { PlandietaformComponent } from './plandieta/plandietaform/plandietaform.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'find-nutricionista', component: FindNutricionistaComponent},
  {path: 'paciente', component: PacienteComponent},
  {path: 'alimentos', component: AlimentosComponent},
  {path: 'mediciongeneral/:id', component: MediciongeneralComponent},
  {path: 'cita', component: CitaComponent},
  {path: 'medicionsegmental/:id', component: MedicionsegmentalComponent},
  {path: 'medicionespecifica/:id', component: MedicionespecificaComponent},
  {path: 'antecedenteclinico/:id', component: AntecedenteclinicoComponent},
  {path: 'antecedentetratamiento/:id', component: AntecedentetratamientoComponent},
  {path: 'filtroalimentario', component: FiltroalimentarioComponent},
  {path: 'platopredeterminado', component: PlatospredeterminadoComponent},
  {path: 'plandieta', component: PlandietaformComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
