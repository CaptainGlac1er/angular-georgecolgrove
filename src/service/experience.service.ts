import {Injectable} from '@angular/core';
import {Job} from '../classes/job';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  jobs: Map<string, Job>;

  constructor() {
    this.jobs = new Map<string, Job>();
    this.jobs.set('softwareadvice',
      {
        company: 'Software Advice',
        position: 'Software Developer Intern',
        description: 'Maintained legacy PHP code in moving it to better code standards and newer features',
        startDate: new Date('05-21-2018'),
        logoUrl: 'https://www.softwareadvice.com/img/sa_logo_tm-reverse-2x-sm.png',
        location: 'Austin, Texas',
        frameworksUsed: [{
            url: 'https://secure.php.net/',
            text: 'PHP'
          }, {
          url: 'https://phpunit.de/',
          text: 'PHPUnit'
        }, {
          url: 'https://www.smarty.net/',
          text: 'Smarty'
        }, {
          url: 'https://www.docker.com/',
          text: 'Docker'
        }, {
          url: 'https://gitlab.com/',
          text: 'Gitlab'
        }, {
          url: 'https://www.mysql.com/',
          text: 'MySQL'
        }, {
          url: 'https://getcomposer.org/',
          text: 'Composer'
        }]
      });
    this.jobs.set('rit',
      {
        company: 'Rochester Institute of Technology',
        position: 'Developer',
        description: 'Worked on the visual overhaul of start.rit.edu and updated code to PHP 7',
        startDate: new Date('07-01-2015'),
        endDate: new Date('05-19-2018'),
        logoUrl: 'https://www.rit.edu/_assets/images/idbar.png',
        location: 'Rochester, New York',
        frameworksUsed: [{
          url: 'https://secure.php.net/',
          text: 'PHP'
        }, {
          url: 'https://gitlab.com/',
          text: 'Gitlab'
        }, {
          url: 'https://www.mysql.com/',
          text: 'MySQL'
        }]
      });
    this.jobs.set('vtc',
      {
        company: 'Vermont Technical College',
        position: 'Java and Web Dev TA, and IT helpdesk',
        description: 'Worked with students to help them learn Web Development and Java, worked at the IT help desk fixing '
          + 'computers  and handled phone calls',
        startDate: new Date('07-17-2014'),
        endDate: new Date('05-06-2015'),
        logoUrl: 'https://www.vtc.edu/sites/all/themes/vtc/images/logo.svg',
        location: 'Randolph, Vermont',
        frameworksUsed: [{
          url: 'https://secure.php.net/',
          text: 'PHP'
        }, {
          url: 'https://www.java.com/en/',
          text: 'Java'
        }, {
          url: 'https://www.mysql.com/',
          text: 'MySQL'
        }]
      });
  }

  getJobs() {
    return this.jobs;
  }

  getJob(company: string) {
    if (this.jobs.has(company)) {
      return this.jobs.get(company);
    }
    return null;
  }
}
