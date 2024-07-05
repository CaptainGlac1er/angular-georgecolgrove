import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../shared/shared/shared.module';

@Component({
  selector: 'app-normal-header-route',
  templateUrl: './normal-header-route.component.html',
  styleUrls: ['./normal-header-route.component.scss'],
  imports: [
    RouterOutlet,
    SharedModule
  ],
  standalone: true
})
export class NormalHeaderRouteComponent {

}
