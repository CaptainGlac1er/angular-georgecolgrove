import { Tile } from './tile';

export abstract class DataRow extends Tile {
  tag: string;
  description?: string;
  links?: Tile[];
}
