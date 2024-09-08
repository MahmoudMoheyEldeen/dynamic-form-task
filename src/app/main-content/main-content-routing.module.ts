import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'Business-Analysis',
  // },
  // {
  //   path:'',
  //   component:
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainContentRoutingModule {}
