import { isPlatformBrowser } from '@angular/common'
import { NavigationEnd, Router } from '@angular/router';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'George Walter Colgrove IV - Personal Website';
  isBrowser: boolean;

  constructor(
    private meta: Meta,
    private titleService: Title,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Record<string, any>
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
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
          ga('create', 'UA-124636170-1', 'auto');
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
        }
      });
    }
  }
}
