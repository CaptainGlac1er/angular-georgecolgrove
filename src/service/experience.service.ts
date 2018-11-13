import { Injectable } from '@angular/core';
import { Job } from '../classes/job';
import { ProjectsService } from './projects.service';
import { Project } from '../classes/project';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  public jobs$: BehaviorSubject<Map<string, Job>>;

  private experiences = [
    {
      tag: 'softwareadvice',
      company: 'Software Advice',
      position: 'Software Developer Intern',
      shortDescription: 'Maintained legacy PHP code in moving it to better security and code standards and newer features.',
      description: 'Maintained legacy PHP code in moving it to better security and code standards and newer features. Fixed bugs' +
        ' and cleaned out unused code. Helped set the foundation for unit testing that their angular project uses.',
      startDate: '2018-05-21',
      endDate: '2018-12-21',
      logoUrl: 'https://software-advice.imgix.net/base/sa_logo_tm-reverse-2x-sm.png',
      location: 'Austin, Texas',
      frameworksUsed: [{
        extUrl: 'https://secure.php.net/',
        title: 'PHP'
      }, {
        extUrl: 'https://phpunit.de/',
        title: 'PHPUnit'
      }, {
        extUrl: 'https://www.smarty.net/',
        title: 'Smarty'
      }, {
        extUrl: 'https://www.docker.com/',
        title: 'Docker'
      }, {
        extUrl: 'https://gitlab.com/',
        title: 'Gitlab'
      }, {
        extUrl: 'https://www.mysql.com/',
        title: 'MySQL'
      }, {
        extUrl: 'https://getcomposer.org/',
        title: 'Composer'
      }, {
        extUrl: 'https://angular.io/',
        title: 'Angular 6'
      }]
    }, {
      tag: 'rit',
      company: 'Rochester Institute of Technology',
      position: 'Developer',
      shortDescription: 'Worked on the visual overhaul of start.rit.edu and updated code to PHP 7',
      startDate: '2015-07-01',
      endDate: '2018-05-19',
      logoUrl: 'https://www.rit.edu/_assets/images/idbar.png',
      location: 'Rochester, New York',
      frameworksUsed: [{
        extUrl: 'https://secure.php.net/',
        title: 'PHP'
      }, {
        extUrl: 'https://gitlab.com/',
        title: 'Gitlab'
      }, {
        extUrl: 'https://www.mysql.com/',
        title: 'MySQL'
      }]
    }, {
      tag: 'vtc',
      company: 'Vermont Technical College',
      position: 'Java and Web Dev TA, and IT helpdesk',
      shortDescription: 'Worked with students to help them learn Web Development and Java, worked at the IT help desk fixing computers ' +
        'and handled phone calls',
      startDate: '2014-07-17',
      endDate: '2015-05-06',
      logoUrl: 'https://www.vtc.edu/sites/all/themes/vtc/images/logo.svg',
      location: 'Randolph, Vermont',
      frameworksUsed: [{
        extUrl: 'https://secure.php.net/',
        title: 'PHP'
      }, {
        extUrl: 'https://www.java.com/en/',
        title: 'Java'
      }, {
        extUrl: 'https://www.mysql.com/',
        title: 'MySQL'
      }]
    }
  ];

  constructor(
    private projectService: ProjectsService) {
    this.jobs$ = new BehaviorSubject<Map<string, Job>>(this.getExperiencesData());
  }

  getExperiencesData(): Map<string, Job> {
    const jobs: Job[] = [];
    this.experiences.forEach((item) => {
      jobs.push(Job.decode(item));
    });
    const jobsMap = new Map<string, Job>();
    jobs.forEach((job: Job) => {
      jobsMap.set(job.tag, job);
    });
    return jobsMap;
  }

  getJob(tag: string): Job {
    return this.jobs$.value.get(tag);
  }

  getProjectsForJob(job: Job): Project[] {
    return this.projectService.getProjectsForJob(job);
  }
}
