import { Component, Inject, OnInit } from '@angular/core';
import { ExperienceService } from '../../../../service/experience.service';
import { Job } from '../../../../interfaces/job';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../../../interfaces/project';
import { Title } from '@angular/platform-browser';
import { IS_BROWSER } from '../../../../shared/providers';
import { filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss', '../../../../shared/css/page-listing.scss']
})
export class ExperienceComponent implements OnInit {
  experienceTitle = 'Experience:';
  projectTitle = 'Projects:';
  frameworkTitle = 'Frameworks:';
  projectsForJob: Project[] = [];
  job: Job | undefined;


  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService,
    private router: Router,
    @Inject(IS_BROWSER) private isBrowser: boolean,
    private titleService: Title) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('company')),
      filter(company => !!company),
      switchMap(company => this.experienceService.getJob(company)),
      switchMap(job => this.experienceService.getProjectsForJob(job).pipe(map(projects => ({ projects, job }))))
    ).subscribe(({ projects, job }) => {
      this.projectsForJob = projects;
      this.job = job;
      this.titleService.setTitle(`George Walter Colgrove IV - ${this.job.title}`);
    });

    this.route.paramMap.pipe(
      map(params => params.get('company')),
      filter(company => !company),
    ).subscribe(() => {
      return this.router.navigate(['/experiences']);
    })

  }
}
