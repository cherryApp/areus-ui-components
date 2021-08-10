import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HgFormTextareaComponent } from './hg-form-textarea.component';

describe('HgFormTextareaComponent', () => {
  let component: HgFormTextareaComponent;
  let fixture: ComponentFixture<HgFormTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HgFormTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HgFormTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
