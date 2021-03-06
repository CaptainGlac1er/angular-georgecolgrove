import { Component, Inject, OnInit, Optional, PLATFORM_ID } from '@angular/core';
import { RESPONSE } from '@nguniversal/express-engine/tokens';
import { isPlatformBrowser } from '@angular/common';
import { Response } from 'express';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  isBrowser: boolean;
  constructor(
    @Inject(PLATFORM_ID) private platformId: Record<string, any>,
    @Inject(RESPONSE) @Optional() private response: Response) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) {
      this.response.status(404);
    }
  }

}
