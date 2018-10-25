import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ExperienceComponent} from './experience/experience.component';

export const appRoutes: Routes = [
  {path: ':company', component: ExperienceComponent},
  {path: '', component: ExperienceComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(appRoutes);
