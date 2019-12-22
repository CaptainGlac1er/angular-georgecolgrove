import { Link } from './Link';
import { DataRow } from './data-row';

export interface Job extends DataRow {
  company: string;
  location: string;
  position: string;
  logoUrl: string;
  frameworksUsed?: Link[];
}
