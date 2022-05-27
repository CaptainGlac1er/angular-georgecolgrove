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
      { path: '', loadChildren: () => import('../components/home-page/home-page.module').then(m => m.HomePageModule), pathMatch: 'full' },
    ]
  },
  {
    path: '',
    component: NormalHeaderRouteComponent,
    children: [
      { path: 'experiences', loadChildren: () => import('../components/experience/experience.module').then(m => m.ExperienceModule) },
      { path: 'projects', loadChildren: () => import('../components/project/project.module').then(m => m.ProjectModule) },
      { path: 'hobbies', loadChildren: () => import('../components/hobbies/hobbies.module').then(m => m.HobbiesModule) },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { initialNavigation: 'enabled' });
