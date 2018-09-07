import { Component } from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'George Walter Colgrove IV - Personal Website';

  constructor(
    private meta: Meta,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
    this.meta.addTag({name: 'author', content: 'George Walter Colgrove IV'});
  }
}
