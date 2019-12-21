import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Job } from '../interfaces/job';
import { ProjectsService } from './projects.service';
import { Project } from '../interfaces/project';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Tile } from '../interfaces/tile';
import {DataRow} from '../interfaces/data-row';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private readonly isBrowser: boolean;

  constructor(
    private projectService: ProjectsService,
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: Record<string, any>) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  async fetchProjects(): Promise<Job[]> {
    if (this.isBrowser) {
      return await this.http.get<Job[]>(`${environment.cdn}/data/experiences.json`).toPromise();
    }
    return [];
  }

  async convertJobArrayToTileDataArray(jobs: Job[]): Promise<DataRow[]> {
    return jobs.map(job => ({
      ...job,
      title: job.company,
      subTitle: job.position,
    }));
  }

  async getExperiencesData(): Promise<Job[]> {
    if (this.isBrowser) {
      return await this.fetchProjects();
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
