import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home-page.routing';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    SharedModule,
  ]
})
export class HomePageModule {
}
