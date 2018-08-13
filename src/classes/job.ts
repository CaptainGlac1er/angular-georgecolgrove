import {StartEndObject} from '../interfaces/start-end-object';

export class Job implements StartEndObject {
  company: string;
  position: string;
  description: string;
  logoUrl: string;
  endDate?: Date;
  startDate: Date;
}
