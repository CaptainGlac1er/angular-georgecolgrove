import { Component, Input, OnInit } from '@angular/core';
import { Tile } from '../../classes/tile';

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

  constructor() {
  }

  ngOnInit() {
  }

}
