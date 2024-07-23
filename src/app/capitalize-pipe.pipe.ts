import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizePipe',
  standalone: true
})
export class CapitalizePipePipe implements PipeTransform {

  transform(value?: string | null): string {
    if(!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
