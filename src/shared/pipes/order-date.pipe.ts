import { Pipe, PipeTransform } from '@angular/core';
import { StartEndObject } from '../../interfaces/start-end-object';

@Pipe({
  name: 'orderDate'
})
export class OrderDatePipe implements PipeTransform {
  transform<T extends StartEndObject>(list: T[], orderType?: string): T[] {
    switch (orderType) {
      case 'newestFirst':
        if (list) {
          list.sort((a, b) => {
            if (a.startDate > b.startDate) {
              return -1;
            } else if (a.startDate === b.startDate) {
              return 0;
            } else if (a.startDate < b.startDate) {
              return 1;
            }
          });
        }
        break;
    }
    return list;
  }
}
