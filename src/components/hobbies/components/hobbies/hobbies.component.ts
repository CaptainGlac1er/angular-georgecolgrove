import { Component, OnInit } from '@angular/core';
import { DataRow } from '../../../../interfaces/data-row';
import { HobbiesService } from '../../../../service/hobbies.service';
import { Title } from '@angular/platform-browser';
import { PlainTileComponent } from "../../../../shared/components/plain-tile/plain-tile.component";
import { PanelRowComponent } from "../../../../shared/panel-row/panel-row.component";
import { ClickableTileComponent } from "../../../../shared/components/clickable-tile/clickable-tile.component";
import { NgForOf } from "@angular/common";

@Component({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html',
    styleUrls: ['./hobbies.component.scss'],

    imports: [
        PlainTileComponent,
        PanelRowComponent,
        ClickableTileComponent,
        NgForOf
    ]
})
export class HobbiesComponent implements OnInit {
  public hobbies: DataRow[];

  constructor(
    private hobbyService: HobbiesService,
    private titleService: Title
  ) {
  }

  ngOnInit(): void {
    this.hobbies = this.hobbyService.getHobbiesData();
    this.titleService.setTitle(`George Walter Colgrove IV - Hobbies`);
  }

}
