import { DataRow } from './data-row';

export class Project extends DataRow {
  tag: string;
  job?: string;

  static getTile(project: Project): Project {
  return Object.assign({}, project, {
  }) as Project;
}
}


