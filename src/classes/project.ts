import {Tile} from './tile';

export class Project extends Tile {
  tag: string;
  job?: string;
  links?: Tile[];
  description?: string;

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
    });
  }
}


