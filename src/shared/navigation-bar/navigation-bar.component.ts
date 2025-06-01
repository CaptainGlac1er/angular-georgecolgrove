import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgForOf } from "@angular/common";

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss'],

    imports: [
        RouterLink,
        NgForOf
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
