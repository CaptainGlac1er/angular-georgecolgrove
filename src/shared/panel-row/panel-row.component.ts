import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Tile} from '../../classes/tile';

@Component({
  selector: 'app-panel-row',
  templateUrl: './panel-row.component.html',
  styleUrls: ['./panel-row.component.css']
})
export class PanelRowComponent implements OnInit {
  @Input() public title: string;
  @Input() public headerImage?: string;
  @Input() public contentText?: string;
  @Input() public contentTiles: Tile[];
  @Input() public sortByDate: boolean;
  @Input() public useExtUrlFirst = false;

  newestFirst: (a: Tile, b: Tile) => (Tile) = (a, b) => {
    if (a.startDate > b.startDate) {
    return a;
    }
  }

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  async tileClicked(item: Tile) {
    if (item.relUrl && (this.useExtUrlFirst || !item.extUrl)) {
      await this.router.navigate([item.relUrl]);
    } else {
      window.open(item.extUrl, '_blank');
    }
  }

}
