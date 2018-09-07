import {Component, OnInit} from '@angular/core';
import {ExperienceService} from '../../service/experience.service';
import {Job} from '../../classes/job';
import {ActivatedRoute, Router} from '@angular/router';
import {Project} from '../../classes/project';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css', '../../shared/css/page-listing.css']
})
export class ExperienceComponent implements OnInit {
  experienceTitle = 'Experience:';
  projectTitle = 'Projects:';
  frameworkTitle = 'Frameworks:';
  projectsForJob: Project[];
  job: Job;


  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService,
    private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.job = this.experienceService.getJob(params['company']);
      if (this.job === undefined) {
        return this.router.navigate(['/experiences']);
      }
      this.projectsForJob = this.experienceService.getProjectsForJob(this.job);
    });
  }

  getAllJobs() {
    return this.experienceService.getExperiencesData();
  }
  newestFirst = (a, b) => {
    if (a.value.startDate > b.value.startDate) {
      return a.key;
    }
  }
  async selectJob(job: Job) {
    return await this.router.navigate([job.relUrl]);
  }
  selectProject(project: Project) {
    return this.router.navigate([project.relUrl]);
  }
}
