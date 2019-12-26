import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { ExperienceService } from '@service/experience.service';
import { DataRow } from '../../../../interfaces/data-row';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss', '../../../../shared/css/page-listing.scss']
})
export class ExperiencesComponent implements OnInit {
  jobs: DataRow[];
  isBrowser: boolean;

  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Record<string, any>,
    private titleService: Title) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.experienceService.fetchProjects()
      .then(jobs => this.experienceService.convertJobArrayToTileDataArray(jobs))
      .then(jobTiles => this.jobs = jobTiles);
    this.titleService.setTitle(`George Walter Colgrove IV - Jobs`);
  }

}
