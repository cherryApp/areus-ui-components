import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { TestComponent } from './page/test/test.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      slots: {
        first: HomeComponent,
        second: TestComponent,
        third: HomeComponent,
      },
    },
  },
  {
    path: 'test/:id',
    component: TestComponent,
    data: {
      slots: {
        first: TestComponent,
        second: TestComponent,
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
