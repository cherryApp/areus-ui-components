import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appOutletHost]'
})
export class OutletHostDirective {

  @Input('appOutletHost') public name: string | undefined;

  constructor(public viewContainerRef: ViewContainerRef) { }

}
