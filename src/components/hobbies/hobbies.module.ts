import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared/shared.module';
import { hobbiesRouting } from './hobbies.routing';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    hobbiesRouting,
  ]
})
export class HobbiesModule {
}
