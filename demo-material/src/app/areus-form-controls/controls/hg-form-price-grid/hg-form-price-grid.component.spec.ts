import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HgFormPriceGridComponent } from './hg-form-price-grid.component';

describe('HgFormPriceGridComponent', () => {
  let component: HgFormPriceGridComponent;
  let fixture: ComponentFixture<HgFormPriceGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HgFormPriceGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HgFormPriceGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
