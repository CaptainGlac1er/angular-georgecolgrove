import { DataRow } from './data-row';

export interface Project extends DataRow {
  tag: string;
  job?: string;
}


