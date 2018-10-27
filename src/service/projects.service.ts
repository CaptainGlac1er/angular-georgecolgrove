import { Injectable } from '@angular/core';
import { Project } from '../classes/project';
import { Job } from '../classes/job';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Map<string, Project>;

  private projectArray = [
    {
      tag: 'start-rit',
      title: 'Start page for RIT',
      description: 'Overhauled the RIT start page for computer registration.',
      shortDescription: 'Overhauled the RIT start page for computer registration.',
      job: 'rit',
      startDate: '2015-07-01',
      endDate: '2015-12-20',
      links: [
        {
          title: 'start.rit.edu',
          extUrl: 'https://start.rit.edu/',
          shortDescription: 'Computer Registration site for RIT'
        }

      ]
    },
    {
      tag: '3uler',
      title: '3uler Discord Bot',
      description: 'Uses Discord.net library version 1.0, has both a console and gui interface.',
      shortDescription: 'Uses Discord.net library version 1.0, has both a console and gui interface.',
      startDate: '2017-06-22',
      links: [
        {
          title: 'Github Repository',
          extUrl: 'https://github.com/CaptainGlac1er/3uler',
          shortDescription: 'Discord bot built with the C# discord v1 api'
        }

      ]
    },
    {
      tag: 'chemistryuwp',
      title: 'Chemistry Tools UWP',
      description: 'Rewrite of the original Chemistry Tools app that I made for Windows Phone 8.1. This version was made to use the UWP ' +
        'framework',
      shortDescription: 'Chemistry Tools app that works on Windows 10 and Windows Mobile 10, ported over from a previous Windows Phone 8 ' +
        'silverlight app',
      startDate: '2017-08-07',
      links: [
        {
          title: 'Windows Store Link',
          extUrl: 'https://www.microsoft.com/store/productId/9P4X65LM9MM1'
        },
        {
          title: 'Github Repository',
          extUrl: 'https://github.com/CaptainGlac1er/ChemistryToolsUWP'
        }
      ]
    },
    {
      tag: 'web-server',
      title: 'Web Server',
      shortDescription: 'Setup my server to use Docker to host my websites (including this one) and projects.',
      startDate: '2018-06-22',
      links: [
        {
          title: 'This Site',
          extUrl: 'https://www.georgecolgrove.com/'
        },
        {
          title: 'Old Sites Portal',
          extUrl: 'http://gwcprojects.com/'
        }
      ]
    },
    {
      tag: 'tigertenant',
      title: 'TigerTenant',
      shortDescription: 'Online posting board to advertise a sublet. Worked in a team of 5 with the scrum process.',
      startDate: '2017-02-14',
      endDate: '2017-03-5',
      links: [
        {
          title: 'Github Repository',
          extUrl: 'https://github.com/CaptainGlac1er/swen-356-sublet'
        }
      ]
    }
  ];

  constructor() {
    const projects = new Map<string, Project>();
    this.getProjectsData().forEach(function (project: Project) {
      projects.set(project.tag, project);
    });
    this.projects = projects;
  }

  getProjectsData(): Project[] {
    const projects: Project[] = [];
    this.projectArray.forEach(function (item) {
      projects.push(Project.decode(item));
    });
    return projects;
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
