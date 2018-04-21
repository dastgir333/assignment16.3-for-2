import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy',
  pure: false
})
export class SearchByPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    if (!null && value !== null && value !== undefined) {
      if (value.length !== 0) {
        return value.filter((item) => item.lastName.startsWith(args));
      } else {
        return [];
      }
    }

  };
}
