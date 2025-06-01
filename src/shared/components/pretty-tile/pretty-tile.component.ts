import { Component, Input } from '@angular/core';
import { DataRow } from '../../../interfaces/data-row';

@Component({
    selector: 'app-pretty-tile',
    templateUrl: './pretty-tile.component.html',
    styleUrls: ['./pretty-tile.component.scss'],
    
})
export class PrettyTileComponent {
  @Input() public objectToDisplay!: DataRow;
}
