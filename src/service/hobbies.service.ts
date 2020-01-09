import { Injectable } from '@angular/core';
import { DataRow } from '../interfaces/data-row';

@Injectable({
  providedIn: 'root'
})
export class HobbiesService {

  private hobbyArray = [
    {
      tag: 'photography',
      title: 'Photography',
      shortDescription: 'I enjoy nature photography while experimenting with other genres',
      links: [
        {
          title: 'Facebook Page',
          extUrl: 'https://www.facebook.com/gwcphotography/',
        },
        {
          title: 'GuruShots',
          extUrl: 'https://gurushots.com/georgecolgrove/photos',
        },
        {
          title: 'ShutterStock',
          extUrl: 'https://www.shutterstock.com/g/George+Walter+Colgrove+IV',
        }
      ]
    },
    {
      tag: 'gaming',
      title: 'Gaming',
      shortDescription: 'In my free time I like to play some games and occasionally stream',
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

  getHobbiesData(): DataRow[] {
    return this.hobbyArray as DataRow[];
  }
}
