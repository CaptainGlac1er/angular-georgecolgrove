import { Component } from '@angular/core';
import { MobileService } from '@service/mobile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private mobile: MobileService) {
  }

  closeHamburger(): void {
    this.mobile.closeHamburgerMenu();
  }
}
