import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ExperienceService } from '../../../service/experience.service';
import { Job } from '../../../classes/job';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../../classes/project';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css', '../../../shared/css/page-listing.css']
})
export class ExperienceComponent implements OnInit {
  experienceTitle = 'Experience:';
  projectTitle = 'Projects:';
  frameworkTitle = 'Frameworks:';
  projectsForJob: Project[];
  job: Job;
  jobs: Job[];
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
    this.experienceService.jobs$.subscribe(async next => {
      if (next.size === 0) {
        await this.experienceService.updateExperiencesData();
      } else {
        this.jobs = [...next.values()];
      }
    });
    this.route.paramMap.subscribe(params => {
      if (params.has('company')) {
        this.job = this.experienceService.getJob(params.get('company'));
        if (this.job === undefined) {
          return this.router.navigate(['/experiences']);
        } else {
          this.projectsForJob = this.experienceService.getProjectsForJob(this.job);
        }
      }
    });
    this.titleService.setTitle(`George Walter Colgrove IV - ${this.job ? this.job.title : 'Jobs'}`);
  }

  newestFirst = (a, b) => {
    if (a.value.startDate > b.value.startDate) {
      return a.key;
    }
  }
}
