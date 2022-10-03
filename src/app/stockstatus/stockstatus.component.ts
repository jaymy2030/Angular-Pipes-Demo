import { Component, OnInit } from '@angular/core';
import { InvestmentstatusPipe } from '../pipes/investmentstatus.pipe';

export interface statusList{
  Id: number,
  Name: string,
  CurrentPrice: number,
  PurchasePrice: number,
  Qty: number,
  InvestmentValue: number,
  InvestmentCompare: number
};
let CurrentPrice = 0;
let PurchasePrice = 0;
let InvestmentCompare = CurrentPrice - PurchasePrice;

const STATUS_DATA: statusList[]= [
  {Id: 100, Name: 'Samsung', CurrentPrice: 54.5, PurchasePrice: 60.25, Qty: 100, InvestmentValue: 5450, InvestmentCompare: -5.75},
  {Id: 100, Name: 'AAPL', CurrentPrice: 150.43, PurchasePrice: 145.25, Qty: 100, InvestmentValue: 15043, InvestmentCompare: 5.18},
  {Id: 100, Name: 'AMZNg', CurrentPrice: 113.78, PurchasePrice: 100.54, Qty: 100, InvestmentValue: 11378, InvestmentCompare: 13.24},
  {Id: 100, Name: 'META', CurrentPrice: 140.41, PurchasePrice: 150.76, Qty: 100, InvestmentValue: 14041, InvestmentCompare: -10.35},
  {Id: 100, Name: 'DIS', CurrentPrice: 99.5, PurchasePrice: 120.25, Qty: 100, InvestmentValue: 9950, InvestmentCompare: -20.75}
  
]

@Component({
  selector: 'app-stockstatus',
  templateUrl: './stockstatus.component.html',
  styleUrls: ['./stockstatus.component.css']
})
export class StockstatusComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'Name', 'CurrentPrice', 'PurchasePrice', 'Qty', 'InvestmentValue', 'InvestmentCompare'];
  dataSource = STATUS_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
