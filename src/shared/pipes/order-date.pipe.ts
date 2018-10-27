import { Pipe, PipeTransform } from '@angular/core';
import { StartEndObject } from '../../interfaces/start-end-object';

@Pipe({
  name: 'orderDate'
})
export class OrderDatePipe implements PipeTransform {
  transform(list: StartEndObject[], orderType?: string): StartEndObject[] {
    switch (orderType) {
      case 'newestFirst':
        list.sort(this.newestFirst);
        break;
    }
    return list;
  }

  newestFirst: (a: StartEndObject, b: StartEndObject) => number = (a, b) => {
    if (a.startDate > b.startDate) {
      return -1;
    } else if (a.startDate === b.startDate) {
      return 0;
    } else if (a.startDate < b.startDate) {
      return 1;
    }
  }

}
