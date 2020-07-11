import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  navbarCollapsed = true;
  constructor(  public authService: AuthService, private router: Router ) { }
    logout(): void {
      console.log('logut del componet');
      this.authService.logout();
      swal.fire('hasta luego', 'Logout con exito', 'success');
      this.router.navigate([ '/login']);
      sessionStorage.clear();
    }
  ngOnInit() {
  }
 

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }
}
