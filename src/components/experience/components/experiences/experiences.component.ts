import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ExperienceService } from '../../../../service/experience.service';
import { DataRow } from '../../../../interfaces/data-row';
import { IS_BROWSER } from '../../../../shared/providers';
import { filter, map, Observable, shareReplay } from 'rxjs';
import { Job } from '../../../../interfaces/job';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss', '../../../../shared/css/page-listing.scss']
})
export class ExperiencesComponent implements OnInit {
  jobs$: Observable<DataRow[] | undefined> = this.experienceService.fetchProjects().pipe(
    filter((jobs): jobs is Job[] => !!jobs),
    map(jobs => this.experienceService.convertJobArrayToTileDataArray(jobs)),
    shareReplay(1)
  );

  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService,
    private router: Router,
    @Inject(IS_BROWSER) private isBrowser: boolean,
    private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(`George Walter Colgrove IV - Jobs`);
  }

}
