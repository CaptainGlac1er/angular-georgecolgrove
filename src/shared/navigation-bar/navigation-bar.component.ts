import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";


@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss'],

    imports: [
    RouterLink
]
})
export class NavigationBarComponent {
  links = [
    {
      title: 'Experience',
      link: ['/', 'experiences']
    },
    {
      title: 'Projects',
      link: ['/', 'projects']
    },
    {
      title: 'Hobbies',
      link: ['/', 'hobbies']
    }
  ];
}
