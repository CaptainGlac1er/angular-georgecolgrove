import {StartEndObject} from '../interfaces/start-end-object';
import {Link} from './link';

export class Project implements StartEndObject {
  tag: string;
  name: string;
  description: string;
  job?: string;
  startDate: Date;
  endDate?: Date;
  links?: Link[];
}


