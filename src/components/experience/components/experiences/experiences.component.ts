import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ExperienceService } from '../../../../service/experience.service';
import { DataRow } from '../../../../interfaces/data-row';
import { IS_BROWSER } from '../../../../shared/providers';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss', '../../../../shared/css/page-listing.scss']
})
export class ExperiencesComponent implements OnInit {
  jobs: DataRow[];

  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService,
    private router: Router,
    @Inject(IS_BROWSER) private isBrowser: boolean,
    private titleService: Title) {}

  ngOnInit(): void {
    this.experienceService.fetchProjects()
      .then(jobs => this.experienceService.convertJobArrayToTileDataArray(jobs))
      .then(jobTiles => this.jobs = jobTiles);
    this.titleService.setTitle(`George Walter Colgrove IV - Jobs`);
  }

}
