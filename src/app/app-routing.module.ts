import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './usuarios/login.component';
import { FindNutricionistaComponent } from './find-nutricionista/find-nutricionista.component';
import { PacienteComponent } from './paciente/paciente.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { MediciongeneralComponent } from './componentes/mediciongeneral/mediciongeneral.component';
import { CitaComponent } from './cita/cita.component';
import { FiltroalimentarioComponent } from './filtroalimentario/filtroalimentario.component';
import { PlatospredeterminadoComponent } from './platospredeterminado/platospredeterminado.component';
import { PlandietaformComponent } from './plandieta/plandietaform/plandietaform.component';
import { AuthGuard } from './usuarios/guards/auth.guard';
import { RoleGuard } from './usuarios/guards/role.guard';
import { DetalleplanComponent } from './componentes/plandieta/detalleplan/detalleplan.component';
import { PlandietaComponent } from './plandieta/plandieta.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'find-nutricionista', component: FindNutricionistaComponent},
  {path: 'paciente', component: PacienteComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_ADMIN'}},
  {path: 'alimentos', component: AlimentosComponent,canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_ADMIN'}},
  {path: 'cita', component: CitaComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_ADMIN'}},
  {path: 'filtroalimentario', component: FiltroalimentarioComponent , canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_ADMIN'}},
  {path: 'platopredeterminado', component: PlatospredeterminadoComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_ADMIN'}},
  {path: 'plandieta', component: PlandietaComponent,canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_ADMIN'}},
  {path: 'plandieta/:id', component: DetalleplanComponent, canActivate: [AuthGuard, RoleGuard], data: {role: 'ROLE_ADMIN'}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]




})
export class AppRoutingModule { }
