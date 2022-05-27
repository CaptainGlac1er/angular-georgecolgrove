import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './components/experience/experience.component';
import { routing } from './experience.routing';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { SharedModule } from '../../shared/shared/shared.module';


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
