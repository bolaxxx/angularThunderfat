import { Component, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {ListView} from '@fullcalendar/list';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { OptionsInput } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import { AuthService } from '../service/auth.service';
import { CitaService } from '../service/cita.service';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es';
import { ActivatedRoute } from '@angular/router';
import {MatDialog} from '@angular/material';
import { CitaformComponent } from './citaform/citaform.component';
@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.sass']
})
export class CitaComponent implements OnInit {
  options: OptionsInput;
  eventsModel: any;
  @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;
  calendarPlugins = [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin];

  constructor(private authService: AuthService,  private citaService: CitaService, private route: ActivatedRoute,
              public dialog: MatDialog) { }
   ngOnInit() {
    this.options = {
      editable: true,
      locales: [ esLocale ],
      locale: 'es',
      buttonText: {
        today: 'Hoy',
        month: 'Mes',
        week: 'Semana',
        day: 'Día',
        list: 'Agenda'
      },
      eventSources: ['http://localhost:8080/cita/citasNutricionista/' + this.authService.getusuario().id],
      header: {
        left: 'prev,next today,listAgenda',
        center: 'title',
        right: 'dayGridMonth,  listDay, timeGridWeek'
      },
      plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin]
    };
  }
  eventClick(model) {
    const dialogRef = this.dialog.open(CitaformComponent, {
      width: '850px',
      autoFocus: true,
      data: {isNew: false, id: model.event.id}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+ result);
      const calendario = this.fullcalendar.getApi() ;
      calendario.refetchEvents();
    });
   
  }
  eventDragStop(model) {
    console.log(model);
  }
  dateClick(model) {
    console.log(model);
  }
  updateHeader() {
    this.options.header = {
      left: 'prev,next myCustomButton',
      center: 'title',
      right: ''
    };
  }
  openDialog(){
    const dialogRef = this.dialog.open(CitaformComponent, {
      width: '850px',
      autoFocus:true,
      data: {isNew: true}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      const calendario2 = this.fullcalendar.getApi() ;
      calendario2.refetchEvents();
    });
   
  }
  updateEvents() {
    this.eventsModel = [{
      title: 'Updaten Event',
      start: this.yearMonth + '-08',
      end: this.yearMonth + '-10'
    }];
  }
  get yearMonth():string {
    const dateObj = new Date();
    return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  }
  }
