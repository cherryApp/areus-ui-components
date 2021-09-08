import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { OutletHostDirective } from './common/outlet-host.directive';

export interface ComponentType<T = any> {
  new (...args: any[]): T;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChildren(OutletHostDirective) outletHosts!: OutletHostDirective[];

  slots: { [p: string]: ComponentType } = {};

  viewInited: boolean = false;

  constructor(
    private ar: ActivatedRoute,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit() {
    this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof ActivationEnd) {
        console.log(routerEvent.snapshot.data);
        this.slots = routerEvent.snapshot.data.slots || {};
      }

      if (routerEvent instanceof NavigationEnd) {
        if (this.viewInited) {
          this.setOutlets();
        }
      }
    });
  }

  ngAfterViewInit() {
    this.setOutlets();
    this.viewInited = true;
  }

  setOutlets(): void {
    this.outletHosts.forEach( host => {
      const component = this.slots[host.name || ''];
      host.viewContainerRef.clear();
      if (!component) {
        return;
      }

      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        component
      );
      host.viewContainerRef.createComponent(componentFactory);
    } );
  }
}
