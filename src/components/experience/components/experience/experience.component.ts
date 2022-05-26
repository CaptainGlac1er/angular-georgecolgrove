import { Component, Inject, OnInit } from '@angular/core';
import { ExperienceService } from '../../../../service/experience.service';
import { Job } from '../../../../interfaces/job';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../../../interfaces/project';
import { Title } from '@angular/platform-browser';
import { IS_BROWSER } from '../../../../shared/providers';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss', '../../../../shared/css/page-listing.scss']
})
export class ExperienceComponent implements OnInit {
  experienceTitle = 'Experience:';
  projectTitle = 'Projects:';
  frameworkTitle = 'Frameworks:';
  projectsForJob: Project[];
  job: Job;


  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService,
    private router: Router,
    @Inject(IS_BROWSER) private isBrowser: boolean,
    private titleService: Title) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.has('company')) {
        this.experienceService.getJob(params.get('company')).then(item => {
          this.job = item;
          if (this.job === undefined) {
            return this.router.navigate(['/experiences']);
          } else {
            this.titleService.setTitle(`George Walter Colgrove IV - ${this.job.title}`);
            this.experienceService.getProjectsForJob(this.job).then((value => {
              this.projectsForJob = value;
            }));
          }
        });
      }
    });
  }
}
