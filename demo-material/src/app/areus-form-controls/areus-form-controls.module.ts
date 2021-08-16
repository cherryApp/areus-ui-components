import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconCounterFormControlComponent } from './controls/icon-counter-form-control/icon-counter-form-control.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ArFormInputComponent } from './controls/ar-form-input/ar-form-input.component';
import { HgFormInputComponent } from './controls/hg-form-input/hg-form-input.component';
import { HgFormTextareaComponent } from './controls/hg-form-textarea/hg-form-textarea.component';
import { HgFormPriceGridComponent } from './controls/hg-form-price-grid/hg-form-price-grid.component';

@NgModule({
  declarations: [
    IconCounterFormControlComponent,
    ArFormInputComponent,
    HgFormInputComponent,
    HgFormTextareaComponent,
    HgFormPriceGridComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    IconCounterFormControlComponent,
    ArFormInputComponent,
    HgFormInputComponent,
    HgFormTextareaComponent,
    HgFormPriceGridComponent,
  ]
})
export class AreusFormControlsModule { }
