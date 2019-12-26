import { Component, Input } from '@angular/core';
import { DataRow } from '../../../interfaces/data-row';

@Component({
  selector: 'app-clickable-tile',
  templateUrl: './clickable-tile.component.html',
  styleUrls: ['./clickable-tile.component.scss']
})
export class ClickableTileComponent {
  @Input('object') public objectToDisplay: DataRow;
  @Input() public useExtUrlFirst = false;
}
