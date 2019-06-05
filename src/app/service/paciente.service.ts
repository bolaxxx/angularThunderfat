import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Paciente } from '../model/paciente';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private urlEndPoint = 'http://localhost:8080/paciente/';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'aplication/json' });

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }
  private agregarAuthorizationHeader(){
    let token = this.authService.getTokenn();
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
  }
  getPacientes(id: number): Observable<Paciente[]> {
    return this.http
      .get(this.urlEndPoint + id + '/', {headers: this.agregarAuthorizationHeader()})
      .pipe(map(response => response as Paciente[]));
    //  return  this.http.get<Cliente[]>(this.urlEndPoint);
  }


  getPacienteByid(id: number): Observable<Paciente> {
    return this.http
      .get(this.urlEndPoint + 'detalle/' + id, {headers: this.agregarAuthorizationHeader()})
      .pipe(map(response => response as Paciente));
    //  return  this.http.get<Cliente[]>(this.urlEndPoint);
  }

  private isNotAuthorizado(e): boolean {
    if (e.status === 401 ) {
      if (this.authService.isAuthenticated()) {
        this.authService.logout();
      }
      this.router.navigate(['/login']);
      return true;
      }
    if (e.status === 403) {
        swal.fire('Acceso Denegado',
         `Hola ${this.authService.getusuario().username} no tienes autorizacion para acceder al recurso ` , 'warning');
        this.router.navigate(['/']);
        return true;
      }
    return false;
     }
}
