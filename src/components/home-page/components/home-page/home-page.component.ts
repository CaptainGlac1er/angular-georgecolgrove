import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';
import { Job } from '../../../../interfaces/job';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ExperienceService } from '@service/experience.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [ExperienceService],
  animations: [
    trigger('nameVisible', [
      state('visible', style({
        flex: '1 1 200px',
        minWidth: '130px'
      })),
      state('hidden', style({
        flex: '0',
        width: '0',
      })),
      transition('visible => hidden', [
        animate('.2s')
      ]),
      transition('hidden => visible', [
        animate('0.2s')
      ]),
    ])
  ]
})
export class HomePageComponent implements OnInit {
  isBrowser: boolean;
  logo = `${environment.cdn}/img/personalLogo2.png`;
  name = 'George Walter Colgrove IV';
  gamertag = 'CaptainGlac1er';
  phone = '+1 802 595-1798';
  isMinimized = false;
  about = {
    title: 'About:',
    text: 'Constructing well built secure software is what I strive for. <br />'
      + 'I have worked with PHP, JavaScript, C#, Java, and SQL. I\'ve tinkered around with assembly and C++ '
      + 'along with learning microprocessor coding. My goal with my code learning is to make code more '
      + 'secure and modular for reusability and future development.',
    headerImage: 'https://cdn.georgecolgrove.com/img/profile.jpg'
  };
  jobs: Job[] = [];
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

  @ViewChild('header', { static: false }) titleElem: ElementRef;
  nameVisible: string;
  constructor(
    private experienceService: ExperienceService,
    private router: Router,
    private meta: Meta,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) platformId: Record<string, any>) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.experienceService.getExperiencesData().then(jobs => this.jobs = jobs);
    this.titleService.setTitle('George Walter Colgrove IV - Personal Website');
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isMinimized = document.documentElement.scrollTop > 250;
  }
}
