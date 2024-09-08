import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
} from '@jsverse/transloco';
import Swal from 'sweetalert2';
import { WorksEffectsRoutingModule } from './works-effects-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WorksEffectsRoutingModule,
    TranslocoDirective,
    TranslocoPipe,
    TranslocoModule,
  ],
})
export class WorksEffectsModule {}
