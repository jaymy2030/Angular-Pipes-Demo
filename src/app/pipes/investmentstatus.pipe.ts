import { Pipe, PipeTransform } from '@angular/core';




@Pipe({
  name: 'investmentstatus'
})
export class InvestmentstatusPipe implements PipeTransform {
  
  transform(value: number, CurrentPrice: number, PurchasePrice: number )  {
   if(CurrentPrice > PurchasePrice)
   {
      return 'profit';
   }
   else if(CurrentPrice < PurchasePrice)
   {
      return 'Loss';
   }
   else
   {
      return 'Neutral';
   }
     
   
}
}
