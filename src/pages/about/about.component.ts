import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutText: string = 'I am learning C#, C++, JavaScript, Java, VHDL, Web development, and databases. I overhauled the start page for' +
  ' RIT and included a mobile friendly version. I have programmed two apps for the Windows Phone Store that has received over 3000' +
  ' downloads. I enjoy working with technology and I always like to learn more advanced technologies. I am currently' +
  ' studying at the Rochester Institute of Technology. I enjoy going on hackerrank.com or projecteuler.net in my free time.';

  constructor() {
  }

  ngOnInit() {
  }

}
