import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ProjectComponent} from './components/project/project.component';

export const appRoutes: Routes = [
  { path: '', component: ProjectComponent},
  { path: ':project', component: ProjectComponent}
];

export const projectRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
