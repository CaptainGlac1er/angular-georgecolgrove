import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExperienceComponent} from './experience/experience.component';
import {routing} from './experience.routing';
import {SharedModule} from '../../shared/shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    routing,
  ],
  declarations: [
    ExperienceComponent,
  ]
})
export class ExperienceModule { }
