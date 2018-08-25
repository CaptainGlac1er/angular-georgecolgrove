import {StartEndObject} from '../interfaces/start-end-object';
import {Link} from './link';

export class Job implements StartEndObject {
  tag: string;
  company: string;
  location: string;
  position: string;
  shortDescription: string;
  logoUrl: string;
  frameworksUsed?: Link[];
  startDate: Date;
  endDate?: Date;
}
