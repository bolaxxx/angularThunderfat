import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './usuarios/login.component';
import { FindNutricionistaComponent } from './find-nutricionista/find-nutricionista.component';
import { PacienteComponent } from './paciente/paciente.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { MediciongeneralComponent } from './componentes/mediciongeneral/mediciongeneral.component';
import { CitaComponent } from './cita/cita.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'find-nutricionista', component: FindNutricionistaComponent},
  {path: 'paciente', component: PacienteComponent},
  {path: 'alimentos', component: AlimentosComponent},
  {path: 'mediciongeneral/:id', component: MediciongeneralComponent},
  {path: 'cita', component: CitaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
