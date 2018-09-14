import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseOrdr'
})
export class ReversePipe implements PipeTransform {

  transform(value) {
      if (!value) return;

      return value.reverse();
    }
}
