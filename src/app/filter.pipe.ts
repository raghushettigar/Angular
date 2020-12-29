import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): unknown {
    if ( value && value.length) {
     const test =  value.filter((data: any) => {
         if (data.login.includes(args[0])) {
           return data;
         }
      });
     return test;
    }
  }

}
