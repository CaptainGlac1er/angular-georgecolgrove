import {Component, OnInit} from '@angular/core';
import {ExperienceService} from '../../service/experience.service';
import {Job} from '../../classes/job';
import {Router} from '@angular/router';
import {Displayable} from '../../interfaces/displayable';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [ExperienceService]
})
export class HomePageComponent implements OnInit {
  name = 'George Walter Colgrove IV';
  gamertag = 'CaptainGlac1er';
  phone = '+1 802 595-1798';
  about = {
    title: 'About:',
    text: 'Constructing well built secure software is what I strive for. <br />'
      + 'I have worked with PHP, JavaScript, C#, Java, and SQL. I\'ve tinkered around with assembly and C++ '
      + 'along with learning microprocessor coding. My goal with my code learning is to make code more '
      + 'secure and modular for reusability and future development.'
  };
  jobs: Map<string, Job>;
  homepage = {
    jobs: {
      title: 'Experience:',
      positions: null
    },
    links: {
      title: 'Links:',
      urls: [
        {
          title: 'LinkedIn',
          url: 'https://www.linkedin.com/in/georgecolgrove'
        },
        {
          title: 'Github',
          url: 'https://github.com/CaptainGlac1er'
        },
        {
          title: 'HackerRank',
          url: 'https://www.hackerrank.com/georgecolgrove'
        },
      ]
    }
  };

  constructor(private experienceService: ExperienceService, private router: Router) {
    this.jobs = this.experienceService.getJobs();
  }

  ngOnInit() {
  }

  newestFirst = (a, b) => {
    if (a.value.startDate > b.value.startDate) {
      return a.key;
    }
  }

  goToJobPage(job: Displayable) {
    console.log(this);
    this.router.navigate(['/experiences/' + job.getTag()]);
  }

  getJobs(): Job[] {
    return this.experienceService.getExperiencesData();
  }
}
