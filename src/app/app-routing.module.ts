import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component';
import { StockstatusComponent } from './stockstatus/stockstatus.component';
import { HomeComponent } from './home/home.component';
 


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
 
  {
    path: 'stocks',
    component: StocksComponent
  },
  {
    path: 'stockstatus',
    component: StockstatusComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    
    [RouterModule.forRoot(routes)],
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
