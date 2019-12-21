import { ILink } from '../interfaces/ILink';
import { StartEndObject } from '../interfaces/start-end-object';

export abstract class Tile implements ILink, StartEndObject {
  icon?: string;
  title?: string;
  subTitle?: string;
  shortDescription?: string;
  startDate?: string;
  endDate?: string;
  starred?: boolean;
}
