import { Routes } from '@angular/router';
import { FirstFormComponent } from './first-form/first-form.component';
import { SecondFormComponent } from './second-form/second-form.component';

export const routes: Routes = [
  {
    path: '',
    component: FirstFormComponent,
  },
  {
    path: 'second-form',
    component: SecondFormComponent,
  },
];
