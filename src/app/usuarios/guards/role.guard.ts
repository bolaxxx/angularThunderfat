import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let role = next.data['role'] as string;
    console.log(role);
    if (this.authService.hasRoles(role)) {
      return true;
    } else {
      swal.fire('acceso denegado',
      'haz login con  una cuenta de nutricionista o utilaza la aplicacion movil si erees un paciente ', 'error');
      this.router.navigate(['/']);
      return false;
    }
  }
}
