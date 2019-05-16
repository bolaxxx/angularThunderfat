import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEndPoint = 'http://localhost:8080/api/cliente';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'aplication/json' });
  constructor(private http: HttpClient, private router: Router) {}

  getClientes(): Observable<Cliente[]> {
    return this.http
      .get(this.urlEndPoint)
      .pipe(map(response => response as Cliente[]));
    //  return  this.http.get<Cliente[]>(this.urlEndPoint);
  }
  private isNotAuthorizado(e): boolean {
    if (e.status === 401 || e.status === 403) {
      this.router.navigate(['/login']);
      return true;
    }
    return false;
  }
}
