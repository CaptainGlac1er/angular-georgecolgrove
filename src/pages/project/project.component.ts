import { Component, OnInit } from '@angular/core';
import {Project} from '../../classes/project';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectsService} from '../../service/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css', '../../shared/css/page-listing.css']
})
export class ProjectComponent implements OnInit {
  project: Project;
  myAbout: '<About />';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.project = this.projectService.getProject(params['project']);
      if (this.project === undefined) {
        return this.router.navigate(['/projects']);
      }
    });
  }

  getAllProjects() {
    return this.projectService.getProjects();
  }
  newestFirst = (a, b) => {
    if (a.value.startDate > b.value.startDate) {
      return a.key;
    }
  }
  selectProject(project: Project) {
    return this.router.navigate(['/projects/' + project.tag]);
  }

}
