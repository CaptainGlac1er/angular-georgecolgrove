import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';

export const appRoutes: Routes = [
  { path: ':company', component: ExperienceComponent },
  { path: '', component: ExperiencesComponent },
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(appRoutes);
