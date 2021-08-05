import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArFormInputComponent } from './ar-form-input.component';

describe('ArFormInputComponent', () => {
  let component: ArFormInputComponent;
  let fixture: ComponentFixture<ArFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
