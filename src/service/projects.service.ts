import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Project } from '../interfaces/project';
import { Job } from '../interfaces/job';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  private readonly isBrowser: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) platformId: Record<string, any>
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  async fetchProjects(): Promise<Project[]> {
    if (this.isBrowser) {
      return this.http.get<Project[]>(`${environment.cdn}/data/projects.json`).toPromise<Project[]>();
    }
    return [];
  }

  async getProjectsData(): Promise<Project[]> {
    if(this.isBrowser) {
      return await this.fetchProjects();
    }
    return [];
  }

  async getProject(tag: string): Promise<Project> {
    const data = await this.getProjectsData();
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
    for (const item of data) {
      if (item.job === job.tag) {
        projects.push(item);
      }
    }
    return projects;
  }
}
