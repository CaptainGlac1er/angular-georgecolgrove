import { booleanAttribute, Component, input } from '@angular/core';
import { Tile } from '../../../interfaces/tile';
import { RouterLink } from "@angular/router";
import { NgTemplateOutlet } from "@angular/common";

@Component({
    selector: 'app-clickable-tile',
    templateUrl: './clickable-tile.component.html',
    styleUrls: ['./clickable-tile.component.scss'],

    imports: [
    RouterLink,
    NgTemplateOutlet
]
})
export class ClickableTileComponent {
    objectToDisplay = input<Tile>();
    useExtUrlFirst = input(false, { transform: booleanAttribute });
}
