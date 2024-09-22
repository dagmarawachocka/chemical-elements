import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {
  ELEMENT_DATA,
  COLUMNS_TITLES,
  PeriodicElement,
} from './chemical-el-table-datasource';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChemicalElFilterComponent } from '../chemical-el-filter/chemical-el-filter.component';
import { MatDialog } from '@angular/material/dialog';
import { ChemicalElDialogComponent } from '../chemical-el-dialog/chemical-el-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-chemical-el-table',
  templateUrl: './chemical-el-table.component.html',
  styleUrl: './chemical-el-table.component.scss',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    ChemicalElFilterComponent,
    MatProgressSpinnerModule,
  ],
})
export class ChemicalElTableComponent implements OnInit {
  readonly displayedColumns = COLUMNS_TITLES;
  readonly dataSource = new MatTableDataSource<PeriodicElement>([]);
  protected dataReady = false;
  private dialog = inject(MatDialog);

  public ngOnInit() {
    setTimeout(() => {
      this.dataSource.data = ELEMENT_DATA;
      this.dataReady = true;
    }, 2000);
  }

  protected openDialog(recordData: PeriodicElement) {
    const dialogRef = this.dialog.open(ChemicalElDialogComponent, {
      data: recordData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        const updatedDataSource = this.dataSource.data.map(
          (el: PeriodicElement) => {
            if (el.name === recordData.name) {
              return result;
            }
            return el;
          }
        );
        this.dataSource.data = updatedDataSource.sort(
          (x, y) => x.position - y.position
        );
      }
    });
  }
}
