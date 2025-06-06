import { Component, OnInit } from '@angular/core';
import { Project } from '../../../../interfaces/project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../../../../service/projects.service';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs';
import { ClickableTileComponent } from "../../../../shared/components/clickable-tile/clickable-tile.component";
import { PanelRowComponent } from "../../../../shared/panel-row/panel-row.component";
import { PlainTileComponent } from "../../../../shared/components/plain-tile/plain-tile.component";
import { DatePipe, NgForOf, NgIf } from "@angular/common";
import { OrderDatePipe } from "../../../../shared/pipes/order-date.pipe";

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss', '../../../../shared/css/page-listing.scss'],
    providers: [ProjectsService],

    imports: [
        ClickableTileComponent,
        PanelRowComponent,
        PlainTileComponent,
        DatePipe,
        NgIf,
        NgForOf,
        OrderDatePipe
    ]
})
export class ProjectComponent implements OnInit {
  project: Project | undefined;
  myAbout = 'About:';
  myLinks = 'Links:';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectsService,
    private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(`George Walter Colgrove IV - project`);
    this.route.paramMap.pipe(
      map(params => params.get('project')),
      filter(project => !!project),
      switchMap(project => this.projectService.getProject(project)),
    ).subscribe(value => {
      this.project = value;
      this.titleService.setTitle(`George Walter Colgrove IV - ${this.project.title}`);
    });

    this.route.paramMap.pipe(
      map(params => params.get('project')),
      filter(project => !project),
    ).subscribe(() => {
      return this.router.navigate(['/projects']);
    })
  }
}
