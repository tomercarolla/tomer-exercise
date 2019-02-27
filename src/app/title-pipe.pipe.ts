import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlePipe'
})
export class TitlePipePipe implements PipeTransform {

  transform(value: string): string {
    const newVal = value.replace(/[^\w\s]/gi, '');
    return newVal.slice();
  }

}
