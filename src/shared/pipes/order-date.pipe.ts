import { Pipe, PipeTransform } from '@angular/core';
import { StartEndObject } from '../../interfaces/start-end-object';

@Pipe({
  name: 'orderDate'
})
export class OrderDatePipe implements PipeTransform {
  transform<T extends StartEndObject>(list: T[], orderType?: 'newestFirst' | 'oldestFirst'): T[] {
    if (list) {
      switch (orderType) {
        case 'newestFirst':
          list.sort((a: T, b: T): number => {
            if (a.startDate > b.startDate) {
              return -1;
            } else if (a.startDate === b.startDate) {
              return 0;
            }
            return 1;
          });
          break;
        case 'oldestFirst':
          list.sort((a: T, b: T): number => {
            if (a.startDate > b.startDate) {
              return 1;
            } else if (a.startDate === b.startDate) {
              return 0;
            }
            return -1;
          });
      }
    }
    return list;
  }
}
