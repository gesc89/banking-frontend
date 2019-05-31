import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'balanceFormat'
})
export class BalanceFormatPipe implements PipeTransform {

  transform(value: number): number {

    if (value < 0) {
      
      return value = value * -1;
    
    }

    return value;
    
  }

}
