import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'George Walter Colgrove IV - Personal Website';
  isBrowser: boolean;

  constructor(
    private meta: Meta,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.meta.addTag({name: 'author', content: 'George Walter Colgrove IV'});
  }
  ngOnInit() {
    if (this.isBrowser) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
    }
  }
}
