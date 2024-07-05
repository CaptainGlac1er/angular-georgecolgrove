import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-no-header-route',
  templateUrl: './no-header-route.component.html',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  styleUrls: ['./no-header-route.component.scss']
})
export class NoHeaderRouteComponent {

}
