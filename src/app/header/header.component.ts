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
  opened: boolean;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor(  public authService: AuthService, private router: Router ) { }
  
  ngOnInit() {
  }
 

  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }
}
 