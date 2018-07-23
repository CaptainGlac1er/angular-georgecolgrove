import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  name = 'George Walter Colgrove IV';
  gamertag = 'CaptainGlac1er';
  phone = '+1 802 595-1798';
  about = {
    title: '<About />',
    text: 'Constructing well built secure software is what I strive for. <br />'
    + 'I have worked with PHP, JavaScript, C#, Java, and SQL. I\'ve tinkered around with assembly and C++ '
    + 'along with learning microprocessor coding. My goal with my code learning is to make code more '
    + 'secure and modular for reusability and future development.'
  };
  homepage = {
    jobs: {
      title: '<Experience />',
      positions: [
        {
          company: 'Software Advice',
          position: 'Software Developer Intern',
          description: 'Maintained legacy PHP code in moving it to better code standards and newer features'
        },
        {
          company: 'Rochester Institute of Technology',
          position: 'Developer',
          description: 'Worked on the visual overhaul of start.rit.edu and updated code to PHP 7'
        },
        {
          company: 'Vermont Technical College',
          position: 'Java and Web Dev TA, and IT helpdesk',
          description: 'Worked with students to help them learn Web Development and Java, worked at the IT help desk fixing '
            + 'computers  and handled phone calls'
        }
      ]
    },
    links: {
      title: '<Links />',
      urls: [
        {
          title: 'LinkedIn',
          url: 'https://www.linkedin.com/in/georgecolgrove'
        },
        {
          title: 'Github',
          url: 'https://github.com/CaptainGlac1er'
        },
        {
          title: 'HackerRank',
          url: 'https://www.hackerrank.com/georgecolgrove'
        },
      ]
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
