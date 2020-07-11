import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from '@angular/core';
import { MedicionSegmental } from '../../model/medicion-segmental';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MedicionsegmentalService } from '../../service/medicionsegmental.service';
import { AuthService } from 'src/app/service/auth.service';
import { ActivatedRoute } from '@angular/router';
import { MedicionSegmentalFormComponent } from './medicion-segmental-form/medicion-segmental-form.component';

@Component({
  selector: 'app-medicionsegmental',
  templateUrl: './medicionsegmental.component.html',
  styleUrls: ['./medicionsegmental.component.sass']
})
export class MedicionsegmentalComponent implements OnInit {
  displayedColumns: string[] = [
    'Fecha',
    'bdmusculo',
    'bdporcentajegrasas',
    'bimusculo',
    'biporcentajegrasas',
    'pdmusculo',
    'pdporcentajegrasas',
    'pimusculo',
    'piporcentajegrasas',
    'tmusculo',
    'tporcentajegrasa'
  ];
  @Input() mediconessegmentales: MedicionSegmental[];
  dataSource;
  @ViewChild(MatSort) sort: MatSort;
  @Output() medicionSelect = new EventEmitter<MedicionSegmental>();
  constructor(
    private authService: AuthService,
    private medicongeneralService: MedicionsegmentalService,
    private mattable: MatTableModule
  ) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.mediconessegmentales);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  selecionarMedicion(medicion: MedicionSegmental): void {
    this.medicionSelect.emit(medicion);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.mediconessegmentales.isFirstChange()) {
      this.dataSource = new MatTableDataSource(changes.mediconessegmentales.currentValue);
    } else {
      this.dataSource = new MatTableDataSource(changes.mediconessegmentales.currentValue);
    }
  }
}
