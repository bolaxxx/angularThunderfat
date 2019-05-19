import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './usuarios/login.component';
import { FindNutricionistaComponent } from './find-nutricionista/find-nutricionista.component';
import { PacienteComponent } from './paciente/paciente.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { AlimentoformComponent } from './componentes/alimentoform.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'find-nutricionista', component: FindNutricionistaComponent},
  {path: 'paciente/:id', component: PacienteComponent},
  {path: 'alimentos', component: AlimentosComponent},
  {path: 'alimentos/create', component: AlimentoformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
