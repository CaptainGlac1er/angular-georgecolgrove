import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-panel-row',
    templateUrl: './panel-row.component.html',
    styleUrls: ['./panel-row.component.scss'],
    standalone: false
})
export class PanelRowComponent {
  @Input() public title!: string;
  @Input() public headerImage?: string;
  @Input() public contentText?: string;
}
