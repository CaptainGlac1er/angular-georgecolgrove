import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { ExperienceService } from '@service/experience.service';
import { Job } from '../../../../classes/job';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css', '../../../../shared/css/page-listing.css']
})
export class ExperiencesComponent implements OnInit {
  jobs: Job[];
  isBrowser: boolean;

  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Record<string, any>,
    private titleService: Title) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  async ngOnInit(): Promise<void> {
    this.jobs = await this.experienceService.fetchProjects();
    console.log(this.jobs);
    this.titleService.setTitle(`George Walter Colgrove IV - Jobs`);
  }

}
