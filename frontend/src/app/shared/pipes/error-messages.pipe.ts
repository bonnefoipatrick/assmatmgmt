import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorMessages'
})
export class ErrorMessagesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
