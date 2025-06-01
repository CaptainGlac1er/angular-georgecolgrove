import { Component, inject } from '@angular/core';
import { IS_BROWSER } from '../../shared/providers';
import { RESPONSE } from "../../express.tokens";

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
    private readonly response = inject(RESPONSE, { optional: true });
    private readonly isBrowser = inject(IS_BROWSER, { optional: true });
      constructor() {
          if(!this.isBrowser && this.response) {
              this.response.status(404);
          }
      }
}
