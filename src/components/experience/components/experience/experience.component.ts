import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ExperienceService } from '@service/experience.service';
import { Job } from '../../../../classes/job';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../../../classes/project';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css', '../../../../shared/css/page-listing.css']
})
export class ExperienceComponent implements OnInit {
  experienceTitle = 'Experience:';
  projectTitle = 'Projects:';
  frameworkTitle = 'Frameworks:';
  projectsForJob: Project[];
  job: Job;
  isBrowser: boolean;


  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object,
    private titleService: Title) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
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
