import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChemicalElTableComponent } from "./chemical-el-table/chemical-el-table.component";
import { ChemicalElFilterComponent } from "./chemical-el-filter/chemical-el-filter.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChemicalElTableComponent, ChemicalElFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chemical-elements';
}
