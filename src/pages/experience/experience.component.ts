import {Component, OnInit} from '@angular/core';
import {ExperienceService} from '../../service/experience.service';
import {Job} from '../../classes/job';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css', '../../shared/css/page-listing.css']
})
export class ExperienceComponent implements OnInit {
  myExperience = '<Experience />';
  jobFrameworks = '<Frameworks />';
  job: Job;

  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService,
    private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.job = this.experienceService.getJob(params['company']);
    });
  }

  getAllJobs() {
    return this.experienceService.getJobs();
  }
  newestFirst = (a, b) => {
    if (a.value.startDate > b.value.startDate) {
      return a.key;
    }
  }

  selectJob(job: string) {
    this.router.navigate(['/experiences/' + job]);
  }
}
