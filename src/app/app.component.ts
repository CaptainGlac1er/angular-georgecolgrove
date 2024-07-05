import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { IS_BROWSER } from '../shared/providers';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared/shared.module';


declare let gtag: (...any: unknown[]) => unknown;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    SharedModule
  ],
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
  ) {
    if (this.isBrowser && environment.googleAnalyticsTag) {
      // register google tag manager
      const gTagManagerScript = document.createElement('script');
      gTagManagerScript.async = true;
      gTagManagerScript.src = `https://www.googletagmanager.com/gtag/js?id=${environment.googleAnalyticsTag}`;
      document.head.appendChild(gTagManagerScript);

      // register Google Analytics
      const gaScript = document.createElement('script');
      gaScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', '${environment.googleAnalyticsTag}');
    `;
      document.head.appendChild(gaScript);
    }}

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
          gtag('event', 'page_view', {
            'page_path': event.urlAfterRedirects,
            'user_agent': window.navigator.userAgent
          });
        }
      });
    }
  }
}
