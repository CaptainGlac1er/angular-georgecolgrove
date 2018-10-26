import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRowComponent } from '../panel-row/panel-row.component';
import { OrderDatePipe } from '../pipes/order-date.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    PanelRowComponent,
    OrderDatePipe
  ],
  exports: [
    PanelRowComponent,
    OrderDatePipe
  ]
})
export class SharedModule {
}
