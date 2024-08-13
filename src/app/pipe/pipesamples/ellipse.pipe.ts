import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipse',
  standalone: true
})
export class EllipsePipe implements PipeTransform {

  transform(value: string, limit: number = 200, completed: boolean = false, ellipsestring: string = '...'): unknown {
    if (!value) return 'No Content';
    // console.log(limit);
    // if (completed) {
    //   // limit = value.substr(0, limit).lastIndexOf(' ');
    //   console.log(value.substr(0, limit).lastIndexOf(' '));
      
    // }
    // console.log(limit);
    
    return value.length > limit ? value.substr(0, limit) + ellipsestring : value
  }

}
