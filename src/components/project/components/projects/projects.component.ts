import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '@service/projects.service';
import { Project } from '../../../../classes/project';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', '../../../../shared/css/page-listing.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  isBrowser: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectsService,
    private titleService: Title,
    @Inject(PLATFORM_ID) platformId: Record<string, any>
    ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.projectService.getProjectsData().then(value => this.projects = value);
    this.titleService.setTitle('George Walter Colgrove IV - Projects');
  }

}
