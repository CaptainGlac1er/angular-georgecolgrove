import { Component, OnInit } from '@angular/core';
import { DataRow } from '../../../classes/data-row';
import { HobbiesService } from '../../../service/hobbies.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  public hobbies: DataRow[];

  constructor(
    private hobbyService: HobbiesService,
    private titleService: Title
  ) {
  }

  ngOnInit() {
    this.hobbies = this.hobbyService.getHobbiesData();
    this.titleService.setTitle(`George Walter Colgrove IV - Hobbies`);
  }

}
