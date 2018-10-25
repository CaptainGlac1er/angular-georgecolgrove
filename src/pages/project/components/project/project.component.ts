import {Component, OnInit} from '@angular/core';
import {Project} from '../../../../classes/project';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectsService} from '../../../../service/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css', '../../../../shared/css/page-listing.css'],
  providers: [ProjectsService]
})
export class ProjectComponent implements OnInit {
  projects: Project[];
  project: Project;
  myAbout = 'About:';
  myLinks = 'Links:';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectsService) {
  }

  ngOnInit() {
    this.projects = this.projectService.getProjectsData();
    this.route.params.subscribe(params => {
      this.project = this.projectService.getProject(params['project']);
      if (this.project === undefined) {
        return this.router.navigate(['/projects']);
      }
    });
  }
}
