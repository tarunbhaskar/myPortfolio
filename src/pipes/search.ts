import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the Search pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'search'
})
export class Search implements PipeTransform {
	
   transform(list: any[], searchTerm: string): any[] {
     if (searchTerm) {
        //searchTerm = searchTerm.toUpperCase();
        return list.filter(item => {
          return (item.Portfolio.toLowerCase().includes(searchTerm.toLowerCase()) ||
           (item.Impact.toLowerCase().includes(searchTerm.toLowerCase())) || 
           (item.Issue.toLowerCase().includes(searchTerm.toLowerCase())) || 
           (item.Notes.toLowerCase().includes(searchTerm.toLowerCase())))
        });
      } else {
        return list;
      }
  }

  /*transform(items: any, filter: any): any {
      if (filter && Array.isArray(items)) {
          let filterKeys = Object.keys(filter);
          return items.filter(item =>
              filterKeys.reduce((memo, keyName) =>
                  (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "", true));
      } else {
          return items;
      }
    }*/
}
