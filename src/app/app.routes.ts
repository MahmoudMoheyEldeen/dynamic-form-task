import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/works-effects/works-effects.module').then(
        (m) => m.WorksEffectsModule
      ),
  },
];
