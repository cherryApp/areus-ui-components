import { Component, HostBinding, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NgControl } from '@angular/forms';
import { MatFormFieldAppearance, FloatLabelType } from '@angular/material/form-field';

export interface IFormGridItem {
  key?: string;
  title: string;
  price?: number;
  itemType?: string;
  value?: boolean;
}

@Component({
  selector: 'hg-form-price-grid',
  templateUrl: './hg-form-price-grid.component.html',
  styleUrls: ['./hg-form-price-grid.component.scss']
})
export class HgFormPriceGridComponent implements ControlValueAccessor, OnInit {

  @Input() title: string = 'Label';

  get value(): IFormGridItem[] {
    for (const control of this.controlList) {
      control.value = this.formGroup.controls[control.key || ''].value;
    }
    return this.controlList;
  }

  builder: FormBuilder = new FormBuilder();
  valueControl: FormControl = new FormControl();
  formGroup: FormGroup = new FormGroup({});
  controlList: IFormGridItem[] = [];

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

  getKey(): string {
    const randomNumber: number = Math.round( Math.random() * 10**5 );
    const key: string = `itemKey-${randomNumber}`;
    const exists: boolean = Boolean(this.controlList.find( i => i.key === key ));
    if (exists) {
      return this.getKey();
    }
    return key;
  }

  rebuild(controls: IFormGridItem[]): void {
    if (!Array.isArray(controls)) {
      return;
    }

    this.controlList = controls;
    const group: {[key: string]: any} = {};
    this.controlList = this.controlList.map( control => {
      const checkedControl = {
        ...control,
        value: control.value || false,
        key: control.key || this.getKey()
      };
      group[checkedControl.key] = checkedControl.value;
      return checkedControl;
    });

    this.formGroup = this.builder.group(group);
  }

  onPriceChanged(event: any, item: IFormGridItem): void {
    item.price = parseInt((event.target as HTMLInputElement).value) || 0;
  }

  onTitleChanged(event: any, item: IFormGridItem): void {
    item.title = (event.target as HTMLInputElement).value || '';
  }

  onChange = (newValue: IFormGridItem[]) => {};
  onTouched = () => { };
  writeValue(newValue: IFormGridItem[]): void {
    this.rebuild(newValue);
    this.onChange(this.value);
  }

  registerOnChange(fn: (newValue: IFormGridItem[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
