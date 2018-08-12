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
        description: 'Maintained legacy PHP code in moving it to better code standards and newer features'
      });
    this.jobs.set('rit',
      {
        company: 'Rochester Institute of Technology',
        position: 'Developer',
        description: 'Worked on the visual overhaul of start.rit.edu and updated code to PHP 7'
      });
    this.jobs.set('vtc',
      {
        company: 'Vermont Technical College',
        position: 'Java and Web Dev TA, and IT helpdesk',
        description: 'Worked with students to help them learn Web Development and Java, worked at the IT help desk fixing '
          + 'computers  and handled phone calls'
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
