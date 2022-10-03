import { Component, OnInit } from '@angular/core';



export interface StockList {
  sName: string;
  sId: number;
  sCurrentPrice: number;
  sPurchasePrice: number;
  sQty: number;
}




const STOCK_DATA: StockList[] = [
  {sId: 100, sName: 'AAPL', sCurrentPrice: 125, sPurchasePrice: 140, sQty: 15},
  {sId: 101, sName: 'GOOGL', sPurchasePrice: 100, sCurrentPrice: 99.28, sQty: 25},
  {sId: 102, sName: 'TSLA', sPurchasePrice: 250, sCurrentPrice: 300.8, sQty: 35},
  {sId: 103, sName: 'BAC', sPurchasePrice: 38, sCurrentPrice: 33.15, sQty: 100},
  {sId: 104, sName: 'GE', sPurchasePrice: 74, sCurrentPrice: 65.22, sQty: 30},
  {sId: 105, sName: 'BA', sPurchasePrice: 130, sCurrentPrice: 143.29, sQty: 20}
   
];




@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  displayedColumns: string[] = ['sId', 'sName', 'sCurrentPrice', 'sPurchasePrice', 'sQty']; 
  dataSource = STOCK_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
