import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  public hamburgerShown: boolean;

  closeHamburgerMenu(): void {
    this.hamburgerShown = false;
  }

  toggleHamburgerMenu(): void {
    this.hamburgerShown = !this.hamburgerShown;
  }
}
