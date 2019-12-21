import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Job } from '../classes/job';
import { ProjectsService } from './projects.service';
import { Project } from '../classes/project';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { map } from 'rxjs/operators';
import { Tile } from '../classes/tile';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private readonly jobs: Job[];
  private readonly isBrowser: boolean;

  constructor(
    private projectService: ProjectsService,
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: Record<string, any>) {
    this.jobs = [];
    this.isBrowser = isPlatformBrowser(platformId);
  }

  async fetchProjects(): Promise<Job[]> {
    if (this.isBrowser) {
      return await this.http.get<Job[]>(`${environment.cdn}/data/experiences.json`).toPromise();
    }
    return [];
  }

  async convertJobArrayToTileDataArray(jobs: Job[]): Promise<Tile[]> {
    return jobs.map(job => ({
      ...job,
          title: job.company,
          subTitle: job.position,
    } as Tile));
  }

  async getExperiencesData(): Promise<Job[]> {
    if (this.isBrowser) {
      if (this.jobs.length === 0) {
        for (const item of await this.fetchProjects()) {
          this.jobs.push(Job.getTile(item));
        }
      }
    }
    return this.jobs;
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
