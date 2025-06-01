import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NavigationBarComponent } from "../navigation-bar/navigation-bar.component";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],

    imports: [
        RouterLink,
        NavigationBarComponent
    ]
})
export class HeaderComponent {
  @Input() isMinimized = false;
}
