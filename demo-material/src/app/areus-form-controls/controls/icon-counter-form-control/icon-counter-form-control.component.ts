import { Component, Input, OnDestroy, OnInit, HostBindingDecorator, Optional, Self, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-icon-counter-form-control',
  templateUrl: './icon-counter-form-control.component.html',
  styleUrls: ['./icon-counter-form-control.component.scss'],
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: IconCounterFormControlComponent,
    },
  ],
  host: {
    '[class.floating]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy',
  },
})
export class IconCounterFormControlComponent<T> implements OnInit, OnDestroy, MatFormFieldControl<T> {

  // Current id.
  static nextId = 0;

  stateChanges = new Subject<void>();
  actualValue: T | null = null;

  @Input() icon: string = '';
  @Input()
  get value(): T | null {
    return this.actualValue;
  }
  set value(val: T | null) {
    this.actualValue = val;
    this.stateChanges.next();
  }

  // Id in the HTML.
  id: string = `app-icon-counter-form-control-${IconCounterFormControlComponent.nextId++}`;

  // Placeholder text.
  @Input()
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }
  private _placeholder: string = '';

  focused = false;

  errorState = false;

  controlType = 'my-tel-input';

  describedBy = '';

  get empty() {
    return !this.actualValue;
  }

  get shouldLabelFloat() { return this.focused || !this.empty; }

  @Input()
  get required() { return this._required; }
  set required(req) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled() { return this._disabled; }
  set disabled(dis) {
    this._disabled = coerceBooleanProperty(dis);
    this.stateChanges.next();
  }
  private _disabled = false;

  constructor(
    private fm: FocusMonitor,
    private elRef: ElementRef,
    @Optional() @Self() public ngControl: NgControl,
  ) {
    fm.monitor(elRef.nativeElement, true).subscribe((origin) => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  ngOnInit(): void {
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this.elRef.nativeElement.querySelector('input').focus();
    }
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }

}
