import {StartEndObject} from '../interfaces/start-end-object';

export class Project implements StartEndObject {
  tag: string;
  name: string;
  description: string;
  job?: string;
  startDate: Date;
  endDate?: Date;
}


