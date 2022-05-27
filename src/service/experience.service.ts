import { Inject, Injectable } from '@angular/core';
import { Job } from '../interfaces/job';
import { ProjectsService } from './projects.service';
import { Project } from '../interfaces/project';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DataRow } from '../interfaces/data-row';
import { IS_BROWSER } from '../shared/providers';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  constructor(
    private projectService: ProjectsService,
    private http: HttpClient,
    @Inject(IS_BROWSER) private isBrowser: boolean) {}

  async fetchProjects(): Promise<Job[]> {
    if (this.isBrowser) {
      return this.http.get<Job[]>(`${environment.cdn}/data/experiences.json`).toPromise();
    }
    return [];
  }

  async convertJobArrayToTileDataArray(jobs: Job[]): Promise<DataRow[]> {
    return jobs.map(job => ({
      ...job,
      title: job.company,
      subTitle: job.position,
      icon: job.logoUrl,
    }));
  }

  async getExperiencesData(): Promise<Job[]> {
    if (this.isBrowser) {
      return this.fetchProjects();
    }
    return [];
  }

  async getJob(tag: string): Promise<Job> {
    const data = await this.getExperiencesData();
    for (const item of data) {
      if (item.tag === tag) {
        return item;
      }
    }
    return undefined;
  }

  async getProjectsForJob(job: Job): Promise<Project[]> {
    return this.projectService.getProjectsForJob(job);
  }
}
