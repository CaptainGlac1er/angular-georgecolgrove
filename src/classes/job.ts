import {StartEndObject} from '../interfaces/start-end-object';
import {Link} from './link';
import {Displayable} from '../interfaces/displayable';

export class Job implements StartEndObject, Displayable {
  tag: string;
  company: string;
  location: string;
  position: string;
  shortDescription: string;
  logoUrl: string;
  frameworksUsed?: Link[];
  startDate: Date;
  endDate?: Date;

  static decode(json): Job {
    const job = Object.create(Job.prototype);
    return Object.assign(job, json, {
      startDate: new Date(json.startDate),
      endDate: new Date(json.endDate)
    });
  }

  public getTitle(): string {
    return this.company;
  }

  public getShortDescription(): string {
    return this.shortDescription;
  }

  public getSubTitle(): string {
    return this.position;
  }

  public getTag(): string {
    return this.tag;
  }

}
