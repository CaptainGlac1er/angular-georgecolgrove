import { Component, Input } from '@angular/core';
import { Tile } from '../../../interfaces/tile';

@Component({
    selector: 'app-clickable-tile',
    templateUrl: './clickable-tile.component.html',
    styleUrls: ['./clickable-tile.component.scss'],
    standalone: false
})
export class ClickableTileComponent {
  @Input('object') public objectToDisplay!: Tile;
  @Input() public useExtUrlFirst = false;
}
