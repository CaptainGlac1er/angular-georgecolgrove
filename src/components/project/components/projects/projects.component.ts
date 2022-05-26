import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '../../../../service/projects.service';
import { Project } from '../../../../interfaces/project';
import { Title } from '@angular/platform-browser';
import { IS_BROWSER } from '../../../../shared/providers';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', '../../../../shared/css/page-listing.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectsService,
    private titleService: Title,
    @Inject(IS_BROWSER) private isBrowser: boolean
    ) {}

  ngOnInit(): void {
    this.projectService.getProjectsData().then(value => this.projects = value);
    this.titleService.setTitle('George Walter Colgrove IV - Projects');
  }

}
