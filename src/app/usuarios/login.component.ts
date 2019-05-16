import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import swal from 'sweetalert2';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { Response } from 'selenium-webdriver/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
titulo = 'por favor log in ';
usuario: Usuario;
  constructor( private authService: AuthService, private route: Router) {
    this.usuario =  new Usuario();
  }

  ngOnInit() {
    console.log('llego al init');
    if (this.authService.isAuthenticated()) {
      console.log('estoy logueado ');
      this.route.navigate(['/']);
      swal.fire('Informacion',  `ya esta logueado `, 'info');
    }
  }
  login(): void {
    console.log( this.usuario );
    if (this.usuario.email === '' || this.usuario.psw === '') {
      swal.fire('Error login', 'email o password vacias ', 'error');
    } else {
    this.authService.login(this.usuario).subscribe(response => {
      console.log(response);
      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      let usuario = this.authService.getusuario();
      this.route.navigate(['/']);
      swal.fire('Login', `Hola ${usuario.username} , ya estas logueado`, 'success');
    }, err => {
       if (err.status === 400) {
        swal.fire('Error Login', 'email o contraeña incorrecta', 'error');
       }
    });
  }
  }


}
