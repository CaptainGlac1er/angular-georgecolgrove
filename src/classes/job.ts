import {StartEndObject} from '../interfaces/start-end-object';
import {Link} from './link';

export class Job implements StartEndObject {
  company: string;
  location: string;
  position: string;
  shortDescription: string;
  logoUrl: string;
  frameworksUsed?: Link[];
  endDate?: Date;
  startDate: Date;
}
