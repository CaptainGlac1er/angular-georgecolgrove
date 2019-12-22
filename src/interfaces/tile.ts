import { Link } from './Link';
import { StartEndObject } from './start-end-object';

export interface Tile extends Link, StartEndObject {
  icon?: string;
  title?: string;
  subTitle?: string;
  shortDescription?: string;
  startDate?: string;
  endDate?: string;
  starred?: boolean;
}
