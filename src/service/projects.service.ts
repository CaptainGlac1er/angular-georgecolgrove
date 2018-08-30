import { Injectable } from '@angular/core';
import {Project} from '../classes/project';
import {Job} from '../classes/job';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Map<string, Project>;

  private projectArray: Project[] = [
    {
      tag: 'start-rit',
      name: 'Start page for RIT',
      description: 'Overhauled the RIT start page for computer registration',
      job: 'rit',
      startDate: new Date('07-01-2015'),
      endDate: new Date('12-20-2015'),
      links: [
        {
          text: 'start.rit.edu',
          url: 'https://start.rit.edu/',
          description: 'Computer Registration site for RIT'
        }

      ]
    },
    {
      tag: '3uler',
      name: '3uler Discord Bot',
      description: 'Uses Discord.net library version 1.0, has both a console and gui interface ',
      startDate: new Date('06-22-2017'),
      links: [
        {
          text: 'Github Repository',
          url: 'https://github.com/CaptainGlac1er/3uler',
          description: 'Discord bot built with the C# discord v1 api'
        }

      ]
    },
    {
      tag: 'chem-tools-uwp',
      name: 'Chemistry Tools UWP',
      description: 'Rewrite of the original Chemistry Tools app that I made for Windows Phone 8.1. This version was made to use the UWP ' +
        'framework',
      startDate: new Date('08-07-2017'),
      links: [
        {
          text: 'Windows Store Link',
          url: 'https://www.microsoft.com/store/productId/9P4X65LM9MM1'
        },
        {
          text: 'Github Repository',
          url: 'https://github.com/CaptainGlac1er/ChemistryToolsUWP'
        }
      ]
    }
  ];
  constructor() {
    const projects = new Map<string, Project>();
    this.getProjects().forEach(function (project: Project) {
      projects.set(project.tag, project);
    });
    this.projects = projects;
  }

  getProjects(): Project[] {
    return this.projectArray as Project[];
  }
  getProject(tag: string): Project {
    return this.projects.get(tag);
  }
  getProjectsForJob(job: Job): Project[] {
    const projects: Project[] = [];
    this.projects.forEach(function (project: Project) {
      if (project.job === job.tag) {
        projects.push(project);
      }
    });
    return projects;
  }
}
