import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderDate'
})
export class OrderDatePipe implements PipeTransform {
  transform(value: (any)[], args?: any): (any)[] {
    return value;
  }
}
