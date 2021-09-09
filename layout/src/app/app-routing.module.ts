import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { RegisterComponent } from './page/register/register.component';
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
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      slots: {
        first: RegisterComponent,
        second: HomeComponent,
        third: TestComponent,
      },
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
