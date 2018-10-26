import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HobbiesComponent } from './hobbies/hobbies.component';

export const appRoutes: Routes = [
  {path: '', component: HobbiesComponent}
];

export const hobbiesRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
