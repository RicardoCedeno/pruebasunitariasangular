

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trueFalsePipe',
  standalone: true
})
export class TrueFalsePipePipe implements PipeTransform {

  transform(value: boolean): string {
    if(value == true) return "SI"
    if(value == false) return "NO"
    else return ""
  }
}




