import {
  Component,
  computed,
  inject,
  model,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PeriodicElement } from '../chemical-el-table/chemical-el-table-datasource';

@Component({
  selector: 'app-chemical-el-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatFormFieldModule,
    MatDialogActions,
    MatDialogClose,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogContent,
    MatDialogTitle,
  ],
  templateUrl: './chemical-el-dialog.component.html',
  styleUrl: './chemical-el-dialog.component.scss',
})
export class ChemicalElDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ChemicalElDialogComponent>);
  readonly data = inject<PeriodicElement>(MAT_DIALOG_DATA);
  readonly elPosition = model(this.data.position);
  readonly elName = model(this.data.name);
  readonly elWeight = model(this.data.weight);
  readonly elSymbol = model(this.data.symbol);

  get periodicEl() {
    return {
      position: this.elPosition(),
      name: this.elName(),
      weight: this.elWeight(),
      symbol: this.elSymbol(),
    };
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSave() {
    this.dialogRef.close(this.periodicEl);
  }
}
