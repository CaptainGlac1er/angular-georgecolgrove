import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const appRoutes: Routes = [
  {path: '', component: ProjectsComponent},
  {path: ':project', component: ProjectComponent}
];

export const projectRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
