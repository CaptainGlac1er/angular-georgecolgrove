import { Component, Input } from '@angular/core';
import { DataRow } from '../../../interfaces/data-row';

@Component({
  selector: 'app-plain-tile',
  templateUrl: './plain-tile.component.html',
  styleUrls: ['./plain-tile.component.scss']
})
export class PlainTileComponent {
  @Input('object') private objectToDisplay: DataRow;

}
