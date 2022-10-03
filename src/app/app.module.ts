import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { StocksComponent } from './stocks/stocks.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import { InvestmentstatusPipe } from './pipes/investmentstatus.pipe';
import {MatGridListModule} from '@angular/material/grid-list';
import { StockstatusComponent } from './stockstatus/stockstatus.component';
import { HomeComponent } from './home/home.component';
import { StockPerformancePipe } from './pipes/stock-performance.pipe';






@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    InvestmentstatusPipe,
    StockstatusComponent,
    HomeComponent,
    StockPerformancePipe,
  
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    MatToolbarModule,
    AppRoutingModule,
    MatInputModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatCardModule,
    MatGridListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
