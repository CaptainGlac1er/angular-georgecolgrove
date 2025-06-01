import { Component, Input } from '@angular/core';
import { Tile } from '../../../interfaces/tile';

@Component({
    selector: 'app-plain-tile',
    templateUrl: './plain-tile.component.html',
    styleUrls: ['./plain-tile.component.scss'],
    standalone: false
})
export class PlainTileComponent {
  @Input('object') public objectToDisplay!: Tile;

}
