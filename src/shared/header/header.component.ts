import { Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('nameVisible', [
      state('visible', style({
        flex: '1 1 200px',
        minWidth: '130px'
      })),
      state('hidden', style({
        flex: '0',
        width: '0',
      })),
      transition('visible => hidden', [
        animate('.2s')
      ]),
      transition('hidden => visible', [
        animate('0.2s')
      ]),
    ])
  ]
})
export class HeaderComponent {
  nameVisible: string;

  @Input('isMinimized') isMinimized = false;

  constructor() {
  }
}
