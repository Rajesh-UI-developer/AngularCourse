import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe',
  standalone: true
})
export class CustompipePipe implements PipeTransform {

  transform(value: any,
    ...args: unknown[]): unknown {
    return value.toUpperCase();
  }

}
