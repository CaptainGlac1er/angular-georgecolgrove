import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRowComponent } from '../panel-row/panel-row.component';
import { OrderDatePipe } from '../pipes/order-date.pipe';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PrettyTileComponent } from '../components/pretty-tile/pretty-tile.component';
import { ClickableTileComponent } from '../components/clickable-tile/clickable-tile.component';
import { PlainTileComponent } from '../components/plain-tile/plain-tile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PanelRowComponent,
    OrderDatePipe,
    NavigationBarComponent,
    HeaderComponent,
    FooterComponent,
    PrettyTileComponent,
    ClickableTileComponent,
    PlainTileComponent,
  ],
  exports: [
    PanelRowComponent,
    OrderDatePipe,
    NavigationBarComponent,
    HeaderComponent,
    FooterComponent,
    PrettyTileComponent,
    ClickableTileComponent,
    PlainTileComponent,
  ]
})
export class SharedModule {
}
