import {Tile} from './tile';

export class DataRow extends Tile {
  tag: string;
  description?: string;
  links?: Tile[];

  static decode(json): DataRow {
    const dataRow = Object.create(DataRow.prototype);
    let startDate: Date;
    let endDate: Date;
    if (json.startDate) {
      startDate = new Date(json.startDate);
    }
    if (json.endDate) {
      endDate = new Date(json.endDate);
    }
    return Object.assign(dataRow, json, {
      startDate: startDate,
      endDate: endDate
    });
  }
}
