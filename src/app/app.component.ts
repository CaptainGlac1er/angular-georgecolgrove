import { NavigationEnd, Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { IS_BROWSER } from '../shared/providers';


declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'George Walter Colgrove IV - Personal Website';

  constructor(
    private meta: Meta,
    private titleService: Title,
    private router: Router,
    @Inject(IS_BROWSER) private isBrowser: boolean
  ) {}

  ngOnInit(): void {
    this.meta.addTags([
      {
        name: 'author',
        content: 'George Walter Colgrove IV'
      },
      {
        name: 'description',
        content: 'Personal website of a Software Engineer with 4 years experience working with PHP, Angular, Java, ' +
          'JavaScript, C#'
      },
      {
        name: 'keywords',
        content: 'personal website'
      }
    ]);
    this.titleService.setTitle(this.title);
    if (this.isBrowser) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          ga('create', environment.googleAnalyticsTag, 'auto');
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
        }
      });
    }
  }
}
