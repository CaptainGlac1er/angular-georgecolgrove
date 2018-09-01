import { Component } from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GWC Website';

  constructor(
    private meta: Meta
  ) {
    this.meta.addTag({name: 'author', content: 'George Walter Colgrove IV'});
  }
}
