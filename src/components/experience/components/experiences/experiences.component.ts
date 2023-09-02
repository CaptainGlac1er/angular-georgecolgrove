import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ExperienceService } from '../../../../service/experience.service';
import { DataRow } from '../../../../interfaces/data-row';
import { IS_BROWSER } from '../../../../shared/providers';
import { EMPTY, filter, map, Observable, shareReplay } from 'rxjs';
import { Job } from '../../../../interfaces/job';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss', '../../../../shared/css/page-listing.scss']
})
export class ExperiencesComponent implements OnInit {
  jobs$: Observable<DataRow[]>;

  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService,
    private router: Router,
    @Inject(IS_BROWSER) private isBrowser: boolean,
    private titleService: Title) {
    if(isBrowser) {
      this.jobs$ = this.experienceService.fetchProjects().pipe(
        filter((jobs): jobs is Job[] => !!jobs),
        map(jobs => this.experienceService.convertJobArrayToTileDataArray(jobs)),
        shareReplay(1)
      );
    } else {
      this.jobs$ = EMPTY;
    }
  }

  ngOnInit(): void {
    this.titleService.setTitle(`George Walter Colgrove IV - Jobs`);
  }

}
