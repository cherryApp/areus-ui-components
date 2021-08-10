import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HgFormInputComponent } from './hg-form-input.component';

describe('HgFormInputComponent', () => {
  let component: HgFormInputComponent;
  let fixture: ComponentFixture<HgFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HgFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HgFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
