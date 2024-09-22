import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../chemical-el-table/chemical-el-table-datasource';
import { debounceTime, filter, Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-chemical-el-filter',
  standalone: true,
  imports: [MatInputModule],
  templateUrl: './chemical-el-filter.component.html',
  styleUrl: './chemical-el-filter.component.scss',
})
export class ChemicalElFilterComponent {
  @Input() tableDataSource!: MatTableDataSource<PeriodicElement>;
  private filterSubjcet$ = new Subject<string>();

  constructor() {
    this.filterSubjcet$
      .pipe(debounceTime(2000), takeUntilDestroyed())
      .subscribe((filterVaule: string) => {
        this.tableDataSource.filter = filterVaule.trim().toLowerCase();
      });
  }

  protected applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filterSubjcet$.next(filterValue);
  }
}
