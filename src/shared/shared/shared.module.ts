import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelRowComponent } from '../panel-row/panel-row.component';
import { OrderDatePipe } from '../pipes/order-date.pipe';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from '@shared/navigation-bar/navigation-bar.component';
import { HeaderComponent } from '@shared/header/header.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { PrettyTileComponent } from '@shared/components/pretty-tile/pretty-tile.component';
import { ClickableTileComponent } from '@shared/components/clickable-tile/clickable-tile.component';
import { PlainTileComponent } from '@shared/components/plain-tile/plain-tile.component';

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
