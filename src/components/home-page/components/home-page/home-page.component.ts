import {
  Component,
  HostListener,
  Inject,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ExperienceService } from '../../../../service/experience.service';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { DataRow } from '../../../../interfaces/data-row';
import { IS_BROWSER, WINDOW } from '../../../../shared/providers';
import { filter, map, Observable, shareReplay } from 'rxjs';
import { Job } from '../../../../interfaces/job';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [ExperienceService]
})
export class HomePageComponent implements OnInit {
  logo = `${environment.cdn}/img/personalLogo2.png`;
  name = 'George Walter Colgrove IV';
  gamertag = 'CaptainGlac1er';
  phone = '+1 802 595-1798';
  isMinimized: boolean;
  about = {
    title: 'About:',
    text: 'Constructing well built secure software is what I strive for. <br />'
      + 'I have worked with PHP, JavaScript, C#, Java, and SQL. I\'ve tinkered around with assembly and C++ '
      + 'along with learning microprocessor coding. My goal with my code learning is to make code more '
      + 'secure and modular for reusability and future development.',
    headerImage: 'https://cdn.georgecolgrove.com/img/profile.jpg'
  };
  homepage = {
    jobs: {
      title: 'Experience:'
    },
    links: {
      title: 'Links:',
      urls: [
        {
          title: 'LinkedIn',
          extUrl: 'https://www.linkedin.com/in/georgecolgrove'
        },
        {
          title: 'Github',
          extUrl: 'https://github.com/CaptainGlac1er'
        },
        {
          title: 'HackerRank',
          extUrl: 'https://www.hackerrank.com/georgecolgrove'
        },
      ]
    }
  };

  jobs$: Observable<DataRow[] | undefined> = this.experienceService.fetchProjects().pipe(
    filter((jobs): jobs is Job[] => !!jobs),
    map(jobs => this.experienceService.convertJobArrayToTileDataArray(jobs)),
    shareReplay(1)
  );

  constructor(
    private experienceService: ExperienceService,
    private router: Router,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    @Inject(IS_BROWSER) private isBrowser: boolean) {
    this.isMinimized = true;
  }

  ngOnInit(): void {
    this.titleService.setTitle('George Walter Colgrove IV - Personal Website');
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isMinimized = this.isBrowser && this.window.scrollY <= 250;
  }
}
