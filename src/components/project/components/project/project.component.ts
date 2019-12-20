import { Component, OnInit } from '@angular/core';
import { Project } from '../../../../classes/project';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from '@service/projects.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css', '../../../../shared/css/page-listing.css'],
  providers: [ProjectsService]
})
export class ProjectComponent implements OnInit {
  project: Project;
  myAbout = 'About:';
  myLinks = 'Links:';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectsService,
    private titleService: Title) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.has('project')) {
        this.projectService.getProject(params.get('project')).then(value => {
          this.project = value;
          if (this.project === undefined) {
            return this.router.navigate(['/projects']);
          }
        });
      }
    });
    this.titleService.setTitle(`George Walter Colgrove IV - ${this.project ? this.project.title : 'project'}`);
  }
}
