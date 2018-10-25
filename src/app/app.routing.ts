import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PageNotFoundComponent} from '../pages/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  {path: '', loadChildren: '../pages/home-page/home-page.module#HomePageModule'},
  {path: 'experiences', loadChildren: '../pages/experience/experience.module#ExperienceModule'},
  {path: 'projects', loadChildren: '../pages/project/project.module#ProjectModule'},
  {path: 'hobbies', loadChildren: '../pages/hobbies/hobbies.module#HobbiesModule'},
  {path: '**', component: PageNotFoundComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {initialNavigation: 'enabled'});
