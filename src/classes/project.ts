import { DataRow } from './data-row';
import { Tile } from './tile';

export class Project extends DataRow {
  tag: string;
  job?: string;

  static decode(json): Project {
    const job = Object.create(Tile.prototype);
    let startDate: Date;
    let endDate: Date;
    if (json.startDate) {
      startDate = new Date(json.startDate);
    }
    if (json.endDate) {
      endDate = new Date(json.endDate);
    }
    return Object.assign(job, json, {
      startDate: startDate,
      endDate: endDate,
      relUrl: '/projects/' + json.tag
    }) as Project;
  }
}


