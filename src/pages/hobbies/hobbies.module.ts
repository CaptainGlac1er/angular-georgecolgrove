import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared/shared.module';
import {HobbiesComponent} from './hobbies/hobbies.component';
import {hobbiesRouting} from './hobbies.routing';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    hobbiesRouting,
  ],
  declarations: [
    HobbiesComponent
  ]
})
export class HobbiesModule {
}
