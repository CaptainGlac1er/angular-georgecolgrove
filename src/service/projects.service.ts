import { Inject, Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { Job } from '../interfaces/job';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IS_BROWSER } from '../shared/providers';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  constructor(
    private http: HttpClient,
    @Inject(IS_BROWSER) private isBrowser: boolean
  ) {}

  async fetchProjects(): Promise<Project[] | undefined> {
    if (this.isBrowser) {
      return this.http.get<Project[]>(`${environment.cdn}/data/projects.json`).toPromise();
    }
    return [];
  }

  async getProjectsData(): Promise<Project[] | undefined> {
    if(this.isBrowser) {
      return this.fetchProjects();
    }
    return undefined;
  }

  async getProject(tag: string): Promise<Project | undefined> {
    const data = await this.getProjectsData();
    if(!data) {
      return undefined;
    }
    for (const item of data) {
      if (item.tag === tag) {
        return item;
      }
    }
    return undefined;
  }

  async getProjectsForJob(job: Job): Promise<Project[]> {
    const projects: Project[] = [];
    const data = await this.getProjectsData();
    if (!data) {
      return [];
    }
    for (const item of data) {
      if (item.job === job.tag) {
        projects.push(item);
      }
    }
    return projects;
  }
}
