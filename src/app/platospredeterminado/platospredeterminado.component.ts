import { Component, OnInit } from '@angular/core';
import { PlatoPredeterminado } from '../model/plato-predeterminado';
import { PlatopredeterminadoService } from '../service/platopredeterminado.service';
import { AuthService } from '../service/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-platospredeterminado',
  templateUrl: './platospredeterminado.component.html',
  styleUrls: ['./platospredeterminado.component.sass']
})
export class PlatospredeterminadoComponent implements OnInit {
  platos: PlatoPredeterminado[] = [];
  constructor(
    private authService: AuthService,
    private servicePlatoPredeterminado: PlatopredeterminadoService
  ) {}
  isPlatoPredeterminadoSelected: boolean;
  PlatoPredeterminadoSelected: PlatoPredeterminado;
  newPlatoPredeterminado: boolean;

  ngOnInit() {
    this.newPlatoPredeterminado = false;
    this.isPlatoPredeterminadoSelected = false;
    this.servicePlatoPredeterminado
      .getPlatosNutricionista(this.authService.getusuario().id)
      .subscribe(platos => (this.platos = platos));
  }
  procesaPropagar(mensaje) {
    console.log(mensaje);
    this.servicePlatoPredeterminado
      .getPlatosNutricionista(this.authService.getusuario().id)
      .subscribe(pacientes => {
        this.platos = pacientes;
        this.newPlatoPredeterminado = false;
      });
  }
  selecionarPlatoPredeterminado(paciente: PlatoPredeterminado): void {
    console.log('paciente selecionado' + JSON.stringify(paciente));
    this.PlatoPredeterminadoSelected = paciente;
    this.newPlatoPredeterminado = false;
    this.isPlatoPredeterminadoSelected = false;
    this.isPlatoPredeterminadoSelected = true;
  }
  eliminarPlatoPredeterminado(paciente: PlatoPredeterminado): void {
    console.log('llego al componente padre en eliminar');
    let i = 0;
    console.log(
      'estado del aarray pacientes antes de borrar ' +
        JSON.stringify(this.platos)
    );
    while (i < this.platos.length) {
      if (this.platos[i].id === paciente.id) {
        console.log('entro por el if eliminar ');
        swal.fire({
            title:
              '¿Estas seguro que quieres eliminar el plato' +
              paciente.nombre +
              '  ?',
            text: 'No se podran recuperar los datos',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo '
          })
          .then(result => {
            if (result.value) {
              i = this.platos.length + 1;
              this.servicePlatoPredeterminado
                .borrarCita(paciente.id)
                .subscribe(() => {
                  this.platos.splice(i, 1);
                  console.log('respuesta del alert+deberia haber borrado ');
                  swal.fire(
                    '¡Eliminado!',
                    'El paciente ha sido borrado.',
                    'success'
                  );
                  this.servicePlatoPredeterminado
                    .getPlatosNutricionista(this.authService.getusuario().id)
                    .subscribe(respuesta => {
                      this.platos = respuesta;
                      this.isPlatoPredeterminadoSelected = false;
                    });
                });
            }
          });
      }
      i++;
    }
    console.log(
      'este es el array en el componente padre despues de eliminar ' +
        JSON.stringify(this.platos)
    );
  }
  nuevoPlatoPredeterminado(): void {
    this.PlatoPredeterminadoSelected = new PlatoPredeterminado();
    this.isPlatoPredeterminadoSelected = false;
    this.isPlatoPredeterminadoSelected = true;
    this.newPlatoPredeterminado = true;
  }
  updatePlatoPredeterminadoSelect(paciente) {
    this.PlatoPredeterminadoSelected = paciente;
    this.isPlatoPredeterminadoSelected = false;
    this.servicePlatoPredeterminado
      .getPlatosNutricionista(this.authService.getusuario().id)
      .subscribe(response => {
        this.platos = response;
        const i = response.findIndex(e => e.id === paciente.id);
        this.PlatoPredeterminadoSelected = response[i];
        this.isPlatoPredeterminadoSelected = true;
      });
    this.newPlatoPredeterminado = false;
  }
  closeform(mensaje) {
    this.isPlatoPredeterminadoSelected = false;
  }
}
