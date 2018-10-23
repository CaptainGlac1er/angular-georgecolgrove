import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomePageComponent} from './components/home-page/home-page.component';

export const appRoutes: Routes = [
  { path: '', component: HomePageComponent},
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);
