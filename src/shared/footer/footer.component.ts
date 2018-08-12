import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  companyName = 'GlacierByte™';
  joke = 'There are 10 types of people in this world, those who understand binary and those who don\'t. :D ';
  constructor() { }

  ngOnInit() {
  }

}
