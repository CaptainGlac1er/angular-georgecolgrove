import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HomePageComponent} from '../pages/home-page/home-page.component';
import {NavigationBarComponent} from '../shared/navigation-bar/navigation-bar.component';
import {PageNotFoundComponent} from '../pages/page-not-found/page-not-found.component';
import {FooterComponent} from '../shared/footer/footer.component';
import {ExperienceComponent} from '../pages/experience/experience.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  {path: 'experience/:company', component: ExperienceComponent},
  { path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationBarComponent,
    PageNotFoundComponent,
    FooterComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
