import { Component, Input } from '@angular/core';
import { NgIf } from "@angular/common";

@Component({
    selector: 'app-panel-row',
    templateUrl: './panel-row.component.html',
    styleUrls: ['./panel-row.component.scss'],

    imports: [
        NgIf
    ]
})
export class PanelRowComponent {
  @Input() public title!: string;
  @Input() public headerImage?: string;
  @Input() public contentText?: string;
}
