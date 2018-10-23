import {ILink} from '../interfaces/ILink';
import {DataRow} from './data-row';

export class Job extends DataRow {
  company: string;
  location: string;
  position: string;
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
