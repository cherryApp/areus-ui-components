import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { TestComponent } from './page/test/test.component';
import { OutletHostDirective } from './common/outlet-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    OutletHostDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
