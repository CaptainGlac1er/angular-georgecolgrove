import { ILink } from '../interfaces/ILink';
import { StartEndObject } from '../interfaces/start-end-object';

export class Tile implements ILink, StartEndObject {
  icon?: string;
  extUrl?: string;
  relUrl?: string;
  title?: string;
  subTitle?: string;
  shortDescription?: string;
  starred?: boolean;
  endDate?: Date;
  startDate?: Date;
}
