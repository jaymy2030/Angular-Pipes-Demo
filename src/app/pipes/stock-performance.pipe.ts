import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'stockPerformance'
})

export class StockPerformancePipe implements PipeTransform {

  transform(value: number, CurrentPrice:  number, PurchasePrice: number, decimal: number ) {
    return ((CurrentPrice / PurchasePrice-1) *100).toFixed(decimal);


  }
  

}
