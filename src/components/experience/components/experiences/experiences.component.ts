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
    @Inject(PLATFORM_ID) platformId: Object,
    private titleService: Title) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.experienceService.fetchProjects().then(data => this.jobs = data);
    this.titleService.setTitle(`George Walter Colgrove IV - Jobs`);
  }

}