import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '@service/projects.service';
import { Project } from '../../../../classes/project';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', '../../../../shared/css/page-listing.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectsService,
    private titleService: Title) {
  }

  ngOnInit() {
    this.projects = this.projectService.getProjectsData();
    this.titleService.setTitle('George Walter Colgrove IV - Projects');
  }

}
