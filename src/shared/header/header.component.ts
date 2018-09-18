import { Component, OnInit } from '@angular/core';
import {MobileService} from '../../service/mobile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header = 'George Colgrove';

  constructor(
    private mobile: MobileService) { }

  ngOnInit() {
  }

  closeHamburger() {
    this.mobile.closeHamburgerMenu();
  }
}
