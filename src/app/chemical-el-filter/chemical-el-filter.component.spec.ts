import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalElFilterComponent } from './chemical-el-filter.component';

describe('ChemicalElFilterComponent', () => {
  let component: ChemicalElFilterComponent;
  let fixture: ComponentFixture<ChemicalElFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChemicalElFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChemicalElFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
