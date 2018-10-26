import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  public hamburgerShown: boolean;

  constructor() {
  }

  closeHamburgerMenu() {
    this.hamburgerShown = false;
  }

  toggleHamburgerMenu() {
    this.hamburgerShown = !this.hamburgerShown;
  }
}
