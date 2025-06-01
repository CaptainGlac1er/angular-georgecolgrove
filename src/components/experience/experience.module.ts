import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './experience.routing';
import { SharedModule } from '../../shared/shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    routing,
  ]
})
export class ExperienceModule {
}
