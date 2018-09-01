import {ILink} from '../interfaces/ILink';
import {Tile} from './tile';

export class Job extends Tile {
  tag: string;
  company: string;
  location: string;
  position: string;
  shortDescription: string;
  logoUrl: string;
  frameworksUsed?: ILink[];

  static decode(json): Job {
    const job = Object.create(Job.prototype);
    let startDate: Date;
    let endDate: Date;
    if (json.startDate) {
      startDate = new Date(json.startDate);
    }
    if (json.endDate) {
      endDate = new Date(json.endDate);
    }
    return Object.assign(job, json, {
      startDate: startDate,
      endDate: endDate,
      title: json.company,
      subTitle: json.position,
      relUrl: '/experiences/' + json.tag
    });
  }
}
