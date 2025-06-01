import { Component, OnInit } from '@angular/core';
import { DataRow } from '../../../../interfaces/data-row';
import { HobbiesService } from '../../../../service/hobbies.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html',
    styleUrls: ['./hobbies.component.scss'],
    standalone: false
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
