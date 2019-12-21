import { Tile } from './tile';

export interface DataRow extends Tile {
  tag: string;
  description?: string;
  links?: Tile[];
}
