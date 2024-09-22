import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalElDialogComponent } from './chemical-el-dialog.component';

describe('ChemicalElDialogComponent', () => {
  let component: ChemicalElDialogComponent;
  let fixture: ComponentFixture<ChemicalElDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChemicalElDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChemicalElDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
