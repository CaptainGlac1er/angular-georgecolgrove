import { Component } from '@angular/core';
import { MobileService } from '@service/mobile.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
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

  constructor(
    public mobileInterface: MobileService
  ) {
  }
}
