import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projectRouting } from './project.routing';
import { SharedModule } from '../../shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    projectRouting,
    SharedModule,
  ]
})
export class ProjectModule {
}
