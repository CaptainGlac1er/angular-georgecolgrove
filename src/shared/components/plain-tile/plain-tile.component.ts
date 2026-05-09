import { Component, Input } from '@angular/core';
import { Tile } from '../../../interfaces/tile';


@Component({
    selector: 'app-plain-tile',
    templateUrl: './plain-tile.component.html',
    styleUrls: ['./plain-tile.component.scss'],

    imports: []
})
export class PlainTileComponent {
  @Input() public objectToDisplay!: Tile;

}
