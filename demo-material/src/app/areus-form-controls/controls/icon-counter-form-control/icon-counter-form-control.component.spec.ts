import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCounterFormControlComponent } from './icon-counter-form-control.component';

describe('IconCounterFormControlComponent', () => {
  let component: IconCounterFormControlComponent;
  let fixture: ComponentFixture<IconCounterFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconCounterFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCounterFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
