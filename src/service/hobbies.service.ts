import { Injectable } from '@angular/core';
import { DataRow } from '../classes/data-row';

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {

  private hobbyArray = [
    {
      tag: 'photography',
      title: 'Photography',
      shortDescription: 'I like taking my camera to events especially fireworks',
      links: [
        {
          title: 'Facebook Page',
          extUrl: 'https://www.facebook.com/gwcphotography/'
        },
      ]
    },
    {
      tag: 'gaming',
      title: 'Gaming',
      shortDescription: 'Love to game in my free time and sometimes stream',
      links: [
        {
          title: 'Steam',
          extUrl: 'http://steamcommunity.com/id/captainglac1er/'
        },
        {
          title: 'Twitch',
          extUrl: 'https://www.twitch.tv/captainglac1er'
        },
      ]
    },
  ];

  constructor() {
  }

  getHobbiesData(): DataRow[] {
    const hobbies: DataRow[] = [];
    this.hobbyArray.forEach(function (item) {
      hobbies.push(DataRow.decode(item));
    });
    return hobbies;
  }
}
