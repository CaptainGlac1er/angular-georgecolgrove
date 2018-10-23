import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectComponent} from './components/project/project.component';
import {projectRouting} from './project.routing';
import {SharedModule} from '../../shared/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    projectRouting,
    SharedModule,
  ],
  declarations: [
    ProjectComponent
  ]
})
export class ProjectModule { }
