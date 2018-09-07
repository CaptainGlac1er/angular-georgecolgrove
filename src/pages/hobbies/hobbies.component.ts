import { Component, OnInit } from '@angular/core';
import {HobbiesService} from '../../service/hobbies.service';
import {DataRow} from '../../classes/data-row';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {
  public hobbies: DataRow[];
  constructor(
    private hobbyService: HobbiesService
  ) { }

  ngOnInit() {
    this.hobbies = this.hobbyService.getHobbiesData();
  }

}
