import { Component, Input } from '@angular/core';
import { Tile } from '../../../interfaces/tile';
import { NgIf } from "@angular/common";

@Component({
    selector: 'app-plain-tile',
    templateUrl: './plain-tile.component.html',
    styleUrls: ['./plain-tile.component.scss'],

    imports: [
        NgIf
    ]
})
export class PlainTileComponent {
  @Input() public objectToDisplay!: Tile;

}
