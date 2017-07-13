import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'brief'})
export class BriefPipe implements PipeTransform {
  transform(value: string, length: number = 100): string {
    if (value.length > length) {
      return value.slice(0, length) + '......'
    }
    return value;
  }
}
