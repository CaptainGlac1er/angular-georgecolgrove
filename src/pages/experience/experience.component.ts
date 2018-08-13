import {Component, OnInit} from '@angular/core';
import {ExperienceService} from '../../service/experience.service';
import {Job} from '../../classes/job';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  myExperience = '<Experience />';
  job: Job;

  constructor(
    private route: ActivatedRoute,
    private experienceService: ExperienceService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.job = this.experienceService.getJob(params['company']);
    });
  }

}
