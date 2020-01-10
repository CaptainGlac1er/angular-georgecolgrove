import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { NoHeaderRouteComponent } from '../components/no-header-route/no-header-route.component';
import { NormalHeaderRouteComponent } from '../components/normal-header-route/normal-header-route.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: NoHeaderRouteComponent,
    children: [
      { path: '', loadChildren: '../components/home-page/home-page.module#HomePageModule', pathMatch: 'full' },
    ]
  },
  {
    path: '',
    component: NormalHeaderRouteComponent,
    children: [
      { path: 'experiences', loadChildren: '../components/experience/experience.module#ExperienceModule' },
      { path: 'projects', loadChildren: '../components/project/project.module#ProjectModule' },
      { path: 'hobbies', loadChildren: '../components/hobbies/hobbies.module#HobbiesModule' },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled' });
