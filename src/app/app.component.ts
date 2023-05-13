import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularThunderfat';
  navbarCollapsed = true;
  opened: boolean;
  constructor(  public authService: AuthService, private router: Router ) { }
  logout(): void {
    console.log('logut del componet');
    this.authService.logout();
    swal.fire('hasta luego', 'Logout con exito', 'success');
    this.router.navigate([ '/login']);
    sessionStorage.clear();
  }
}
