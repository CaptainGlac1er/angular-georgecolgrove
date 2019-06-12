import { Component, OnInit } from '@angular/core';
import { MobileService } from '../../service/mobile.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
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

  ngOnInit() {
  }

}
