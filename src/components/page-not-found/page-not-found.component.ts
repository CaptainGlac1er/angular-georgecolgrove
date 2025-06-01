import { Component, Inject, OnInit, Optional } from '@angular/core';
import { RESPONSE } from '../../express.tokens';
import { Response } from 'express';
import { IS_BROWSER } from '../../shared/providers';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss'],
    standalone: false
})
export class PageNotFoundComponent implements OnInit {
  constructor(
    @Inject(IS_BROWSER) private isBrowser: boolean,
    @Inject(RESPONSE) @Optional() private response: Response) {}

  ngOnInit(): void {
    if (!this.isBrowser) {
      this.response.status(404);
    }
  }

}
