import { Component, HostBinding, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NgControl } from '@angular/forms';
import { MatFormFieldAppearance, FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'hg-form-textarea',
  templateUrl: './hg-form-textarea.component.html',
  styleUrls: ['./hg-form-textarea.component.scss']
})
export class HgFormTextareaComponent implements ControlValueAccessor, OnInit {

  @Input() maxLength: number = 10;
  @Input() rows: number = 5;
  @Input() hintAlign: 'start' | 'end' = 'start';
  @Input() label: string = 'Label';
  @Input() placeholder: string = 'placeholder';
  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() labelPosition: 'inner' | 'outer' = 'outer';
  @Input()
  set floatLabel(float: FloatLabelType | boolean) {
    this._floatLabel = (float as boolean);
  }
  get floatLabel(): FloatLabelType {
    return this._floatLabel ? 'always' : 'never';
  }
  private _floatLabel: boolean = false;

  get value(): string {
    return this.formGroup.controls.value.value;
  }

  valueControl: FormControl = new FormControl();
  formGroup: FormGroup = new FormGroup({
    value: this.valueControl
  });

  // ControlValueAccessor elements.
  @Input() disabled = false;
  @HostBinding('style.opacity')
  get opacity() {
    return this.disabled ? 0.25 : 1;
  }

  constructor(
    @Optional()
    @Self() public ngControl: NgControl,
  ) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(
      values => this.onChange(this.value)
    );
  }

  onChange = (newValue: string) => {};
  onTouched = () => { };
  writeValue(newValue: string): void {
    this.formGroup.controls.value.setValue(newValue);
    this.onChange(this.value);
  }

  registerOnChange(fn: (newValue: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
