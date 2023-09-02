import { Inject, Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { Job } from '../interfaces/job';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IS_BROWSER } from '../shared/providers';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {
  constructor(
    private http: HttpClient,
    @Inject(IS_BROWSER) private isBrowser: boolean
  ) {}

  fetchProjects(): Observable<Project[]> {
    if (this.isBrowser) {
      return this.http.get<Project[]>(`${environment.cdn}/data/projects.json`);
    }
    return of([]);
  }

  getProjectsData(): Observable<Project[]> {
    if(this.isBrowser) {
      return this.fetchProjects();
    }
    return of([]);
  }

  getProject(tag: string): Observable<Project | undefined> {
    return this.getProjectsData().pipe(
      map(projects => projects.find(project => project.tag === tag))
    )
  }

  getProjectsForJob(job: Job): Observable<Project[]> {
    return this.getProjectsData().pipe(
      map(projects => projects.reduce<Project[]>((previousValue, currentValue) => {
        console.log(currentValue, job)
        if(currentValue.job === job.tag) {
          previousValue.push(currentValue)
        }
        return previousValue;
      }, []))
    )
  }
}
