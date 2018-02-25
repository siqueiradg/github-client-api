import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'searchfilter'
})

@Injectable()
export class SearchFilterPipe implements PipeTransform {
  transform(item: any, search: any): any {
    if (search === undefined || search === '') {
      return item;
    }else {
      const filter = search;
      return item.filter(data => data.full_name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }

  }
}
