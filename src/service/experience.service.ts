import { Inject, Injectable } from '@angular/core';
import { Job } from '../interfaces/job';
import { ProjectsService } from './projects.service';
import { Project } from '../interfaces/project';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DataRow } from '../interfaces/data-row';
import { IS_BROWSER } from '../shared/providers';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  constructor(
    private projectService: ProjectsService,
    private http: HttpClient,
    @Inject(IS_BROWSER) private isBrowser: boolean) {}

  fetchProjects(): Observable<Job[] | null> {
    if (this.isBrowser) {
      return this.http.get<Job[]>(`${environment.cdn}/data/experiences.json`);
    }
    return of(null);
  }

  convertJobArrayToTileDataArray(jobs: Job[]): DataRow[] {
    return jobs.map(job => ({
      ...job,
      title: job.company,
      subTitle: job.position,
      icon: job.logoUrl,
    }));
  }

  getExperiencesData(): Observable<Job[] | null> {
    if (this.isBrowser) {
      return this.fetchProjects();
    }
    return of(null);
  }

  getJob(tag: string): Observable<Job | undefined> {
    return this.getExperiencesData().pipe(
      map(data => data?.find(experience => experience.tag === tag) || undefined)
    );
  }

  getProjectsForJob(job: Job): Observable<Project[]> {
    return this.projectService.getProjectsForJob(job);
  }
}
