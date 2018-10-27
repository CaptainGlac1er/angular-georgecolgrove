import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './components/experience/experience.component';
import { routing } from './experience.routing';
import { SharedModule } from '../../shared/shared/shared.module';
import { ExperiencesComponent } from './components/experiences/experiences.component';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    routing,
  ],
  declarations: [
    ExperienceComponent,
    ExperiencesComponent,
  ]
})
export class ExperienceModule {
}
