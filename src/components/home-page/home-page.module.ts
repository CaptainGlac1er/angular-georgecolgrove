import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home-page.routing';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    SharedModule,
  ],
  declarations: [
    HomePageComponent,
  ]
})
export class HomePageModule {
}
